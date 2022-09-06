import * as React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container, Divider, Grid, IconButton, Link as MUILink, Typography, styled, Stack, ThemeProvider } from '@mui/material/'
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Grid container direction="column" justifyContent="center">
          <Container maxWidth="lg">
            <Stack direction="row" justifyContent="center" divider={<Divider orientation="vertical" flexItem />}>
              <Link href={"/"} passHref>
                <MUILink><Typography align="center" sx={{px: 1}}>Home</Typography></MUILink>
              </Link>
              <Link href={"/"} passHref>
                <MUILink><Typography align="center" sx={{px: 1}}>About</Typography></MUILink>
              </Link>
              <Link href={"/"} passHref>
                <MUILink><Typography align="center" sx={{px: 1}}>Resume</Typography></MUILink>
              </Link>
              <Link href={"/"} passHref>
                <MUILink><Typography align="center" sx={{px: 1}}>Projects</Typography></MUILink>
              </Link>
              <Link href={"/"} passHref>
                <MUILink><Typography align="center" sx={{px: 1}}>Blog</Typography></MUILink>
              </Link>
            </Stack>
          </Container>
         
            <Typography variant="h6" align="center" sx={{mt: 2}}>
                Akira Suzuki
            </Typography>
            <Stack
                justifyContent="center"
                direction="row"
                alignItems="center">
                <a 
                href="https://www.linkedin.com/in/akira-suzuki-/"
                target="_blank" rel="noreferrer">
                    <IconButton
                        aria-label="Personal LinkedIn"
                        component="label"
                        >
                    <LinkedInIcon />
                    </IconButton>
                </a>
                <a 
                href="https://github.com/asuzukii"
                target="_blank" rel="noreferrer">
                    <IconButton
                      aria-label="Github Profile"
                      component="label">
                      <GitHubIcon />
                    </IconButton>
                </a>
            </Stack>
            <Typography variant="subtitle2" align="center">
                Last Updated: 9/4/2022
            </Typography>
        </Grid>
    </footer>
  );
};
export default Footer;