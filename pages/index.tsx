import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import HomeBanner from '../components/homeBanner';
import ResponsiveAppBar from '../components/menuBar';
import ProjectCard from '../components/projectCard';
import styles from '../styles/Home.module.css'
import theme from '../styles/customTheme'
import { Box, Container, Grid, Typography, Link, Paper, styled, ThemeProvider } from '@mui/material/'

const derain = {
  imageName: '/derain.jpg',
  imageText: 'Demonstration of Deraining an Image',
  title: 'Not Just Streaks',
  text: 'Because there are currently no real-world ground truth pairs of rain and clear images,\
  we decided to collect the data ourselves, and train a very good model with it.',
  githubLink: 'https://github.com/UCLA-VMG/GT-RAIN',
  projectLink: 'https://visual.ee.ucla.edu/gt_rain.htm/',
  projectLinkText: 'Paper Link'
}

function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1, my: 2}}>
      <Grid container spacing={2} justifyContent="center">
          <Grid item xs={9} md={5} justifyContent="center">
            <ProjectCard {...derain} />
          </Grid>
          <Grid item xs={9} md={5} >
            <ProjectCard {...derain} />
          </Grid>
          <Grid item xs={9} md={5} >
            <ProjectCard {...derain} />
          </Grid>
          <Grid item xs={9} md={5} >
            <ProjectCard {...derain} />
          </Grid>
      </Grid>
    </Box>
  );
}

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
            <HomeBanner />
              <Container maxWidth='md'>
                <Typography>
                  Hi, I am Akira and I work at <Link color='secondary' href="https://www.cepton.com/">
                  <b>Cepton</b></Link>, where I research and implement algorithms for perception
                  with LiDAR point clouds, as well as efficiently pipelining, storing, and visualizing the data.
                  I graduated UCLA in June 2022 with honors in Electrical Engineering-- at university,
                  I published <Link color='secondary' href="https://visual.ee.ucla.edu/gt_rain.htm/"><b>a paper about deraining</b></Link> and did numerous internships
                  ranging from data science in the sales sector in Japan to software in the e-learning world.
                  <br /><br />
                </Typography>
                <Typography align="center">
                  Here are some recent highlights on projects I have worked on outside of work:
                  <br />
                </Typography>
                <FullWidthGrid />
                <Typography align="center">
                  More projects can be found in the <Link color='secondary' href="https://github.com/asuzukii"><b>Projects page.</b></Link>
                </Typography>
                <Typography>  
                  <br/><br/>
                  If you are interested in contacting me, please send an email to <Link color='secondary'
                  href="https://visual.ee.ucla.edu/gt_rain.htm/"><b>asuzuki.swe@gmail.com</b></Link> or
                  reach out from my LinkedIn profile (accessible through the Icon on the top banner!)
                </Typography>
              </Container>
            
          </main>
          <Footer />
        </ThemeProvider>
      </div>
    
  )
}

export default Home
