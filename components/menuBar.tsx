import * as React from 'react';
import { AppBar, Box, Button, Container, Link as MUILink, Toolbar, ThemeProvider, Typography } from '@mui/material'
import Link from 'next/link'
import theme from '../styles/customTheme'
const pages = ['About', 'Resume', 'Projects', 'Blog'];

const ResponsiveAppBar = () => {
  return (
    <ThemeProvider theme={theme}>
        <AppBar position="static" sx={{ boxShadow: 1 }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Link href={"/"}>
                        <MUILink>
                            <Typography variant="h6" sx={{color: 'background.default'}}>
                                Akira Suzuki
                            </Typography>
                            </MUILink>
                    </Link>
                <Box sx={{ flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'flex-end'}}>
                    {pages.map((page) => (
                        <Link key={page} href={"/" + page.toLowerCase()} passHref>
                            <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                            {page}
                            </Button>
                        </Link>
                    
                    ))}
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
    
    
  );
};
export default ResponsiveAppBar;