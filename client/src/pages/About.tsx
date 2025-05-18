mport React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent,
  Divider,
  alpha,
  useTheme,
  Paper
} from '@mui/material';

const About: React.FC = () => {
  const theme = useTheme();
  
  // Animation states
  const [animate, setAnimate] = useState(false);
  const [animateStats, setAnimateStats] = useState(false);
  const [animateProjections, setAnimateProjections] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    setAnimate(true);
    
    const statsTimer = setTimeout(() => {
      setAnimateStats(true);
    }, 500);
    
    const projectionsTimer = setTimeout(() => {
      setAnimateProjections(true);
    }, 1000);
    
    return () => {
      clearTimeout(statsTimer);
      clearTimeout(projectionsTimer);
    };
  }, []);

  // Company values
  const values = [
    {
      title: 'Innovation',
      description: 'We continuously pioneer new technologies and methodologies to provide cutting-edge career development solutions.',
      icon: '🚀'
    },
    {
      title: 'Empowerment',
      description: 'We believe in empowering individuals to take control of their career journeys through knowledge and tools.',
      icon: '💪'
    },
    {
      title: 'Inclusivity',
      description: 'We design our platform to be accessible and beneficial for professionals from all backgrounds and industries.',
      icon: '🌍'
    },
    {
      title: 'Integrity',
      description: 'We uphold the highest standards of data privacy, transparency, and ethical AI use in everything we do.',
      icon: '🛡️'
    }
  ];

  // Projection figures
  const projections = [
    {
      year: '2025',
      users: '50,000+',
      revenue: '$4.2M',
      description: 'Expanding our user base through strategic partnerships with universities and professional associations.'
    },
    {
      year: '2026',
      users: '150,000+',
      revenue: '$12.8M',
      description: 'Launching enhanced AI features and expanding into European and Asian markets.'
    },
    {
      year: '2027',
      users: '500,000+',
      revenue: '$38.5M',
      description: 'Introducing enterprise solutions for Fortune 500 companies and government agencies.'
    }
  ];

  return (
    <Box>
      {/* Hero Section with Animation */}
      <Box
        sx={{
          background: 'linear-gradient(120deg, #0a2540 0%, #1a56db 100%)',
          color: 'white',
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated background pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            background: 'linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)',
            backgroundSize: '100px 100px',
            zIndex: 1,
            animation: animate ? 'backgroundMove 30s linear infinite' : 'none',
            '@keyframes backgroundMove': {
              '0%': { backgroundPosition: '0 0' },
              '100%': { backgroundPosition: '100px 100px' }
            }
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              transform: animate ? 'translateY(0)' : 'translateY(50px)',
              opacity: animate ? 1 : 0,
              transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
            }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              align="center" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textShadow: '0 2px 10px rgba(0,0,0,0.2)'
              }}
            >
              About Yōjin
            </Typography>
            <Typography 
              variant="h5" 
              align="center" 
              sx={{ 
                maxWidth: 800, 
                mx: 'auto', 
                mb: 5,
                opacity: 0.9
              }}
            >
              Shaping the future of career development through AI-powered guidance and personalized insights.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Our Story Section with Animation */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{
          maxWidth: 900,
          mx: 'auto',
          transform: animate ? 'translateY(0)' : 'translateY(30px)',
          opacity: animate ? 1 : 0,
          transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
        }}>
          <Typography 
            variant="h3" 
            component="h2" 
            align="center"
            gutterBottom
            sx={{ 
              fontWeight: 600,
              mb: 4
            }}
          >
            Our Story
          </Typography>
          <Typography 
            variant="body1" 
            paragraph
            sx={{ 
              textAlign: 'justify',
              textJustify: 'inter-word',
              lineHeight: 1.8
            }}
          >
            Yōjin was founded in 2025 with a clear mission: to democratize career advancement through AI-powered guidance. The name "Yōjin" comes from the Japanese concept of preparation and foresight – reflecting our philosophy of proactive career development.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph
            sx={{ 
              textAlign: 'justify',
              textJustify: 'inter-word',
              lineHeight: 1.8
            }}
          >
            Our founder recognized that while AI was transforming industries, its potential to guide individual career journeys remained largely untapped. With backgrounds spanning HR technology, machine learning, and career coaching, they assembled a team dedicated to building an intelligent platform that could provide personalized career insights at scale.
          </Typography>
          <Typography 
            variant="body1"
            sx={{ 
              textAlign: 'justify',
              textJustify: 'inter-word',
              lineHeight: 1.8
            }}
          >
            Today, Yōjin serves professionals across all career stages – from recent graduates to executives – helping them navigate their unique paths with confidence and clarity. We've grown into a global team passionate about transforming how people approach their professional development.
          </Typography>
        </Box>
      </Container>

      {/* Our Mission */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.main, 0.03), py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Box
            sx={{
              transform: animate ? 'translateY(0)' : 'translateY(30px)',
              opacity: animate ? 1 : 0,
              transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
              transitionDelay: '0.2s',
              mb: 5,
              pb: 3,
              borderBottom: '1px solid',
              borderColor: alpha(theme.palette.primary.main, 0.1)
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              align="center"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              sx={{ 
                maxWidth: 800, 
                mx: 'auto', 
                fontWeight: 400,
                lineHeight: 1.6,
                fontStyle: 'italic'
              }}
            >
              "To empower individuals to navigate their career journeys with confidence, providing AI-driven insights that reveal opportunities, illuminate paths forward, and accelerate professional growth."
            </Typography>
          </Box>

          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ 
              fontWeight: 600,
              transform: animate ? 'translateY(0)' : 'translateY(30px)',
              opacity: animate ? 1 : 0,
              transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
              transitionDelay: '0.3s'
            }}
          >
            Our Values
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {values.map((value, index) => (
              <Grid component="div" sx={{ gridColumn: { xs: 'span 12', sm: 'span 6' } }} key={index}>
                <Card 
                  elevation={0} 
                  sx={{ 
                    height: '100%',
                    backgroundColor: 'transparent',
                    border: '1px solid',
                    borderColor: alpha(theme.palette.primary.main, 0.1),
                    borderRadius: 3,
                    transform: animate ? 'translateY(0)' : 'translateY(30px)',
                    opacity: animate ? 1 : 0,
                    transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
                    transitionDelay: `${0.4 + index * 0.1}s`
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h1" sx={{ mb: 2, fontSize: '3rem' }}>
                      {value.icon}
                    </Typography>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


      {/* Growth Projections Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ 
            fontWeight: 600, 
            mb: 6,
            transform: animateProjections ? 'translateY(0)' : 'translateY(30px)',
            opacity: animateProjections ? 1 : 0,
            transition: 'transform 0.8s ease-out, opacity 0.8s ease-out'
          }}
        >
          Growth Projections
        </Typography>
        
        <Grid container spacing={4}>
          {projections.map((projection, index) => (
            <Grid component="div" sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }} key={index}>
              <Paper 
                elevation={2}
                sx={{ 
                  p: 4, 
                  height: 320,
                  width: 550, // Fixed height for all projection cards
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  borderTop: '6px solid',
                  borderColor: 'primary.main',
                  transform: animateProjections ? 'translateY(0)' : 'translateY(50px)',
                  opacity: animateProjections ? 1 : 0,
                  transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
                  transitionDelay: `${0.2 + index * 0.2}s`,
                  '&:hover': {
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    transform: 'translateY(-10px)'
                  }
                }}
              >
                <Typography 
                  variant="h6" 
                  color="primary" 
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  {projection.year}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Users
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {projection.users}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary" align="right">
                      Revenue
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {projection.revenue}
                    </Typography>
                  </Box>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" sx={{ flexGrow: 1 }}>
                  {projection.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
