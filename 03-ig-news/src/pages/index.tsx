import { GetStaticProps } from 'next'

import Head from 'next/head'
import { SubscribeButtom } from '../components/SubscribeButtom'
import { stripe } from '../services/stripe'
import { numberToDolar } from '../shared/utils/numberTransform'

import s from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string,
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head><title>Home | ig.news</title></Head>
      
      <main className={s.container}>
        <section className={s.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about the <span>React</span> World</h1>
          
          <p>
            Get access to all the publications <br />
            <span>for {product.amount}/month</span>
          </p>
          
          <SubscribeButtom priceId={product.priceId} />
        </section>

        <img src="images/avatar.svg" alt="girls coding" />

      </main>
    </>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KKAbsLj3b5cSTMfgDaBhH5k', {
    expand: ['product']
  })
  
  const product = {
    priceId: price.id,
    amount: numberToDolar(price.unit_amount / 100),
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 horas = 1 day
  }
} 