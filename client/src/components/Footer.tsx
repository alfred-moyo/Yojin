import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider, Stack, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 8,
        px: 2,
        mt: 'auto',
        backgroundColor: '#000000',
        color: '#ffffff'
      }}
    >
      <Container maxWidth="lg">
        <Grid component="div" container spacing={10}>
          {/* Company Info */}
          <Grid component="div" sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 3' } }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#ffffff',
                fontWeight: 700,
                letterSpacing: '0.5px',
                mb: 2
              }}
            >
              Yōjin
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 3,
                maxWidth: '280px',
                lineHeight: 1.6
              }}
            >
              Your AI-powered career development platform that helps professionals navigate their career journey with confidence.
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.5)',
                mt: 2 
              }}
            >
              © {new Date().getFullYear()} Yōjin. All rights reserved.
            </Typography>
          </Grid>
          
          {/* Quick Links - pushed to the right */}
          <Grid component="div" sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 2' }, pl: { md: 8 } }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#ffffff',
                fontWeight: 600, 
                mb: 3,
                fontSize: '1rem'
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={2}>
              <Link 
                component={RouterLink} 
                to="/" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: '#ffffff'
                  }
                }}
              >
                Home
              </Link>
              <Link 
                component={RouterLink} 
                to="/features" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: '#ffffff'
                  }
                }}
              >
                Features
              </Link>
              <Link 
                component={RouterLink} 
                to="/pricing" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: '#ffffff'
                  }
                }}
              >
                Pricing
              </Link>
              <Link 
                component={RouterLink} 
                to="/about" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: '#ffffff'
                  }
                }}
              >
                About
              </Link>
            </Stack>
          </Grid>
          
          {/* Resources - pushed to the right */}
          <Grid component="div" sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 2' }, pl: { md: 8 } }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#ffffff',
                fontWeight: 600, 
                mb: 3,
                fontSize: '1rem'
              }}
            >
              Resources
            </Typography>
            <Stack spacing={2}>
              <Link 
                component={RouterLink} 
                to="/blog" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: '#ffffff'
                  }
                }}
              >
                Blog
              </Link>
              <Link 
                component={RouterLink} 
                to="/faq" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: '#ffffff'
                  }
                }}
              >
                FAQ
              </Link>
              <Link 
                component={RouterLink} 
                to="/privacy" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: '#ffffff'
                  }
                }}
              >
                Privacy Policy
              </Link>
              <Link 
                component={RouterLink} 
                to="/terms" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: '#ffffff'
                  }
                }}
              >
                Terms of Service
              </Link>
            </Stack>
          </Grid>
          
          {/* Connect With Us */}
          <Grid component="div" sx={{ gridColumn: { xs: 'span 12', sm: 'span 12', md: 'span 5' } }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#ffffff',
                fontWeight: 600, 
                mb: 3,
                fontSize: '1rem'
              }}
            >
              Connect With Us
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 3,
                lineHeight: 1.6
              }}
            >
              Follow us on social media and stay updated with the latest features and career guidance tips.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton 
                aria-label="Twitter" 
                size="small"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&:hover': { color: '#ffffff' },
                  transition: 'color 0.2s'
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                aria-label="LinkedIn" 
                size="small"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&:hover': { color: '#ffffff' },
                  transition: 'color 0.2s'
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                aria-label="GitHub" 
                size="small"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&:hover': { color: '#ffffff' },
                  transition: 'color 0.2s'
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton 
                aria-label="Instagram" 
                size="small"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&:hover': { color: '#ffffff' },
                  transition: 'color 0.2s'
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 5, bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            Helping professionals achieve their career goals since 2025
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            Made with ❤️ {' '}
            <a 
              href="https://alfredmoyo.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
            >
              Alfred
            </a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
