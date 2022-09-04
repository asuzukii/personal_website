import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'
const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Akira Suzuki</title>
        <meta name="description" content="Akira Suzuki's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <Image src="/akira_nekkid.jpg" alt="Akira's Nice Photo" width={1300} height={1000}/> */}
        <Button>
          This is the About Section!
        </Button>
        <Button>
          Hey Andy!
        </Button>
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default About
