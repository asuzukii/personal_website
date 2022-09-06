import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import ResponsiveAppBar from '../components/menuBar';
import styles from '../styles/Home.module.css'
import theme from '../styles/customTheme'
import ProjectCard from '../components/projectCard';
import { Box, Container, Divider, Grid, ThemeProvider, Typography } from '@mui/material/'

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
      <Box sx={{ flexGrow: 1, margin: 1}}>
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
            <Grid item xs={9} md={5} >
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
            <Divider variant="middle" sx={{my: 2}} />
                <Typography
                    sx={{my: 2}}
                    align="center"
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom>
                    <b>Projects</b>
                </Typography>
            <Divider variant="middle" sx={{my: 2}} />
            <FullWidthGrid />

          </Container>
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default About
