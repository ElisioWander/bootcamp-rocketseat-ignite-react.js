import { GetStaticProps } from 'next'
import { stripe } from '../services/stripe';

import Head from "next/head";
import { SubscribeButton } from "../Components/SubscribeButton/SubscribeButton"

import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
            <span>👏 Heym welcome</span>
            <h1>News about the <span>React</span> World!</h1>
            <p>
              Get access to all publications <br/>
              <span>for { product.amount } month</span>
            </p>

            <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1J7WvsHe64Q0CHFPVBeoWVv4')

  const product = {
    priceId: price.id,
    amount: Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 //24 horas
  }
}