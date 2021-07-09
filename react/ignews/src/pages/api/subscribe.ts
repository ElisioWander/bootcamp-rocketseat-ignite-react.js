import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { stripe } from '../../services/stripe'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  

  //if and else to check if it is a POST method
  if(req.method === 'POST') {
    //we neet to know if the user are logged in and get some informations that comes from token throug "request"
    const session = await getSession({ req })

    //we neet to create a customer to the stripe
    const stripeCustomer = await stripe.customers.create({
      email: session.user.email
    })

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
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