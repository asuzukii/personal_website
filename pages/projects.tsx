import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import ResponsiveAppBar from '../components/menuBar';
import styles from '../styles/Home.module.css'
import theme from '../styles/customTheme'
import { Button, Container, ThemeProvider, Typography } from '@mui/material/'
const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Akira Suzuki's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <main>
          <ResponsiveAppBar />
          <Container maxWidth='md'>
            <Typography
                align="center"
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom>
                Projects
            </Typography>
            <Typography>
                This is the Projects Section!
            </Typography>
            <Button href='/'>
                Go back to the main page
            </Button>
          </Container>
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default About
