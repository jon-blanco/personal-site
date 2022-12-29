import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Name</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div>
          <p className={styles.description}>
            Hi there. I'm Jon Blanco.
          </p>
          <p className={styles.description}>
            This is my static site. You can find information here about... me!
          </p>

        </div>
      </main>
    </>
  )
}
