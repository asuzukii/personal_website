import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import HomeBanner from '../components/homeBanner';
import ResponsiveAppBar from '../components/menuBar';
import styles from '../styles/Home.module.css'
import theme from '../styles/customTheme'
import { Container, Typography, ThemeProvider } from '@mui/material/'

const homeBanner = {
  title: 'Akira Suzuki',
  description:
    "Software Engineer",
  image: "/front_banner.jpg",
  imageText: 'main image description',
};

const Home: NextPage = () => {
  return (
      <div className={styles.container}>
        <Head>
          <title>Akira Suzuki</title>
          <meta name="description" content="Akira Suzuki's Website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          <main>
            <ResponsiveAppBar />
            <HomeBanner post={homeBanner} />
            <Container maxWidth='md'>
              <Typography>
                Hi, I&apos;m Akira and I work at Cepton Technologies, a company that develops LiDAR.
                I graduated UCLA in Summer 2022 with an honors in Electrical Engineering. At university,
                I published a paper, did numerous internships, and joined many clubs. This website hosts 
                my most recent resume as well as various project pages that are hosted online, so that
                you can see (at least partly) what each project showcases.

              </Typography>
              <Typography>

                Please contact me at asuzuki.swe@gmail.com if you are interested in exchanging messeges!
              </Typography>
            </Container>
            
          </main>
          <Footer />
        </ThemeProvider>
      </div>
    
  )
}

export default Home
