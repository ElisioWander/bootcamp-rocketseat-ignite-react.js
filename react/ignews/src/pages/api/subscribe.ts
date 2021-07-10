import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { fauna } from '../../services/fauna'
import { query as q } from 'faunadb'
import { stripe } from '../../services/stripe'

type User = {
  ref: {
    id: string
  },
  data: {
    stripe_customer_id: string
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //if and else to check if it is a POST method
  if(req.method === 'POST') {

    /*we neet to know if the user are logged in and get some informations of the user
    that comes from token throug "request"*/
    const session = await getSession({ req })

    /*now we want to get the user id from faunaDB so we can use it later
    to update and pushing the stripeCustomer.id to faunaDB */
    const user = await fauna.query<User>(
      q.Get(
        q.Match(
          q.Index('user_by_email'),
          q.Casefold(session.user.email)
        )
      )
    )

    let customerId = user.data.stripe_customer_id

    if(!customerId) {
      //we need to create a customer to the stripe
      const stripeCustomer = await stripe.customers.create({
        email: session.user.email
      })

      /*we are pushing the stripeCustomer.id to the faunaDB so then we can
      verified, when the route "subscribe" was called again, if the user are
      a customer of the stripe */
      await fauna.query(
        q.Update(
          q.Ref(q.Collection('users'), user.ref.id),
          {
            data: {
              stripe_customer_id: stripeCustomer.id
            }
          }
        )
      )

      customerId = stripeCustomer.id
    }

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        { price: 'price_1J7WvsHe64Q0CHFPVBeoWVv4', quantity: 1 }
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL
    })

    return res.status(200).json({ sessionId: stripeCheckoutSession.id })

  } else {
    res.setHeader('allow', 'POST')
    res.status(405).end('method not allowed')
  }
}