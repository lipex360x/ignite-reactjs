import Head from 'next/head'
import { SubscribeButtom } from '../components/SubscribeButtom'

import s from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head><title>Home | ig.news</title></Head>
      
      <main className={s.container}>
        <section className={s.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about the <span>React</span> World</h1>
          
          <p>
            Get access to all the publications <br />
            <span>for $9.90/month</span>
          </p>
          
          <SubscribeButtom />
        </section>

        <img src="images/avatar.svg" alt="girls coding" />

      </main>
    </>
  )
}
