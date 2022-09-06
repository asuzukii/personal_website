import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import ResponsiveAppBar from '../components/menuBar';
import styles from '../styles/Home.module.css'
import theme from '../styles/customTheme'
import { Container, Divider, ThemeProvider, Typography } from '@mui/material/'
const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resume</title>
        <meta name="description" content="Akira Suzuki's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <main>
          <ResponsiveAppBar />
          <Container maxWidth='md'>
          <Divider variant="middle" sx={{my: 2}} />
            <Typography
                sx={{my: 2}}
                align="center"
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom>
                <b>Resume</b>
            </Typography>
            <Divider variant="middle" sx={{my: 2}} />
            <iframe src="/Akira_Suzuki_Resume.pdf" width="100%" height="700px">
            </iframe>
          </Container>
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default About
