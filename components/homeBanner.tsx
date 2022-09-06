import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, IconButton, Paper, Stack, Typography, ThemeProvider} from '@mui/material/';
import theme from '../styles/customTheme';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const homeBanner = {
    title: 'Akira Suzuki',
    description:
      "Software Engineer",
    image: "/front_banner.jpg",
    imageText: 'main image description',
  };

function HomeBanner() {

  return (
        <ThemeProvider theme={theme}>
            <Paper
            sx={{
                position: 'relative',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${homeBanner.image})`,
                
            }}
            >
                <Box
                    sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.7)',
                    }}
                />
                <Grid container justifyContent="center" >
                    <Grid item md={6}>
                        <Box
                            sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                            }}
                            
                        >
                            <Typography
                                align="center"
                                component="h1"
                                variant="h3"
                                color="inherit"
                                gutterBottom>
                                    <b>{homeBanner.title}</b>
                            
                            </Typography>
                            <Typography
                                align="center"
                                variant="h6"
                                color="inherit"
                                paragraph>
                            {homeBanner.description}
                            </Typography>
                            <Stack
                                justifyContent="center"
                                direction="row"
                                alignItems="center">
                                <a 
                                href="https://www.linkedin.com/in/akira-suzuki-/"
                                target="_blank" rel="noreferrer">
                                    <IconButton
                                        color="secondary"
                                        aria-label="Personal LinkedIn"
                                        component="label"
                                        >
                                    <LinkedInIcon />
                                    </IconButton>
                                </a>
                                <a 
                                href="https://github.com/asuzukii"
                                target="_blank" rel="noreferrer">
                                    <IconButton color="secondary" aria-label="Github Profile" component="label">
                                        <GitHubIcon />
                                    </IconButton>
                                </a>
                            </Stack>
                        </Box>
                        
                    </Grid>
                </Grid>
            </Paper>
        </ThemeProvider>
        
    
  );
}

export default HomeBanner;