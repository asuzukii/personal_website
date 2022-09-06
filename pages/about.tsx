import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import ResponsiveAppBar from '../components/menuBar';
import styles from '../styles/Home.module.css'
import theme from '../styles/customTheme'
import { Container, Divider, Link, ThemeProvider, Typography } from '@mui/material/'
const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
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
                  <b>About</b>
              </Typography>
              <Divider variant="middle" />
              <Typography sx={{my: 4}}>
                  I currently work at <Link color='secondary' href="https://www.cepton.com/">
                  <b>Cepton</b></Link>, where I research and implement algorithms for perception
                  with LiDAR point clouds, as well as efficiently pipelining, storing, and visualizing the data.
                  I&apos;ve used <b>React</b>, <b>Typescript</b>, all kinds of ML packages in Python, and <b>Eigen</b> with C++
                  so far at Cepton.
                  <br /><br />
                  Previously, I interned at <Link color='secondary' href="https://www.dip-net.co.jp/en/company">
                  <b>Dip Corporation</b></Link>, a major Japanese labor solutions company, where 
                  I used various data science methods to clean and analyze the raw data from their sales
                  patterns. I mostly used <b>scikit-learn</b> and <b>pandas</b> in Python.
                  <br /><br />
                  I graduated UCLA in June 2022 with an honors in Electrical Engineering-- at university,
                  I was in a computational imaging lab under Prof. Achuta Kadambi. I co-authored <Link color='secondary' href="https://visual.ee.ucla.edu/gt_rain.htm/">
                  <b>a paper about deraining</b></Link>, which was accepted to <Link color='secondary' href="https://eccv2022.ecva.net/"><b>ECCV 2022</b></Link> recently.
                  I utilized <b>PyTorch</b> as well as <b>OpenCV</b> to preprocess as well as help implement
                  the state-of-art model used to clear rain from images.
                  <br /><br />
                  When not coding, I enjoy cooking, playing soccer and video games, and doing kendo!
                </Typography>
              </Container>
            </main>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default About
