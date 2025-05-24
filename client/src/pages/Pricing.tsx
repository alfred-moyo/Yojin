import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Switch, 
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  alpha,
  useTheme
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const theme = useTheme();
  const [annual, setAnnual] = useState(true);

  // Define pricing tiers with features and pricing
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for individuals starting their career journey',
      monthlyPrice: 2.99,
      annualPrice: 29.99,
      features: [
        'Resume Analysis',
        'Basic Skills Assessment',
        'Job Matching (Limited)',
        'Career Assistant (5 queries/day)',
        'Email Support'
      ],
      buttonText: 'Get Started',
      buttonVariant: 'outlined',
      highlighted: false,
      color: '#6366F1'
    },
    {
      name: 'Professional',
      description: 'Enhanced tools for accelerated career growth',
      monthlyPrice: 7.99,
      annualPrice: 79.99,
      features: [
        'Everything in Starter',
        'Advanced Skills Gap Analysis',
        'Personalized Learning Paths',
        'Unlimited Job Matching',
        'Career Assistant (Unlimited)',
        'Interview Preparation',
        'Priority Support'
      ],
      buttonText: 'Choose Professional',
      buttonVariant: 'contained',
      highlighted: true,
      color: '#3B82F6'
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solution for organizations',
      monthlyPrice: 24.99,
      annualPrice: 249.99,
      features: [
        'Everything in Professional',
        'Team Management',
        'Analytics Dashboard',
        'Custom Integration',
        'Dedicated Account Manager',
        'Employee Development Tracking',
        'White-label Option',
        '24/7 Premium Support'
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outlined',
      highlighted: false,
      color: '#0EA5E9'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(120deg, #0a2540 0%, #1a56db 100%)',
          color: '#ffffff',
          pt: { xs: 12, md: 14 },
          pb: { xs: 8, md: 10 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.1,
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />

        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}
          >
            Simple, Transparent Pricing
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
            Choose the plan that's right for your career journey. All plans include a 14-day free trial.
          </Typography>

          {/* Billing toggle */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Monthly</Typography>
              <Switch 
                checked={annual} 
                onChange={() => setAnnual(!annual)}
                color="default"
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: alpha('#ffffff', 0.3)
                  }
                }}
              />
              <Typography>
                Annual <Box component="span" sx={{ 
                  bgcolor: 'success.main', 
                  color: '#ffffff', 
                  px: 1, 
                  py: 0.5, 
                  borderRadius: 1, 
                  fontSize: '0.75rem',
                  ml: 1
                }}>
                  Save 20%
                </Box>
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Pricing Cards */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 12 }, mt: -2 }}>
        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          {pricingTiers.map((tier, index) => (
            <Grid component="div" sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4' }, maxWidth: { sm: '400px', md: '380px' } }} key={index}>
              <Card 
                elevation={tier.highlighted ? 8 : 2}
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  borderRadius: 4,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  ...(tier.highlighted && {
                    borderTop: '4px solid',
                    borderColor: tier.color,
                    transform: 'translateY(-16px)'
                  }),
                  overflow: 'hidden',
                  '&:hover': {
                    transform: tier.highlighted ? 'translateY(-24px)' : 'translateY(-8px)',
                    boxShadow: tier.highlighted ? 12 : 6
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '8px',
                    background: tier.color,
                    opacity: tier.highlighted ? 1 : 0.7
                  }
                }}
              >
                {tier.highlighted && (
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      top: 12, 
                      right: 12,
                      bgcolor: tier.color,
                      color: '#ffffff',
                      fontSize: 12,
                      fontWeight: 'bold',
                      px: 2,
                      py: 0.5,
                      borderRadius: 10,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                  >
                    MOST POPULAR
                  </Box>
                )}
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box textAlign="center" mb={4}>
                    <Typography variant="h4" component="div" gutterBottom fontWeight="bold" sx={{ color: tier.color }}>
                      {tier.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {tier.description}
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', my: 3, color: tier.color }}>
                      ${annual ? (Math.floor(tier.annualPrice / 12) - 0.01).toFixed(2) : tier.monthlyPrice.toFixed(2)}
                      <Typography variant="subtitle1" component="span" sx={{ verticalAlign: 'baseline', fontSize: '1rem', opacity: 0.8 }}>
                        /mo
                      </Typography>
                    </Typography>
                    {annual && (
                      <Typography variant="body2" color="text.secondary">
                        Billed as ${tier.annualPrice}/year
                      </Typography>
                    )}
                  </Box>

                  <List sx={{ mb: 3 }}>
                    {tier.features.map((feature, idx) => (
                      <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: tier.color }} fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  
                  <Box sx={{ mt: 'auto', textAlign: 'center' }}>
                    <Button 
                      variant={tier.buttonVariant as 'text' | 'outlined' | 'contained'} 
                      size="large" 
                      fullWidth
                      sx={{ 
                        borderRadius: 2, 
                        py: 1.75,
                        fontSize: '1rem',
                        bgcolor: tier.buttonVariant === 'contained' ? tier.color : 'transparent',
                        borderColor: tier.color,
                        color: tier.buttonVariant === 'contained' ? '#ffffff' : tier.color,
                        '&:hover': {
                          bgcolor: tier.buttonVariant === 'contained' ? tier.color : 'rgba(0,0,0,0.04)',
                          borderColor: tier.color,
                          opacity: 0.9
                        }
                      }}
                    >
                      {tier.buttonText}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* FAQ Section */}
        <Box sx={{ py: { xs: 8, md: 10 } }}>
          <Typography 
            variant="h3" 
            align="center" 
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            Frequently Asked Questions
          </Typography>

          {/* FAQs section */}
          {(() => {
            const faqs = [
              {
                question: 'Can I change plans later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. The new pricing will be prorated based on your remaining subscription period.'
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes! All our plans come with a 14-day free trial. No credit card required to start.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards including Visa, Mastercard, and American Express. We also support PayPal and Apple Pay.'
              },
              {
                question: 'Can I cancel my subscription?',
                answer: 'Yes, you can cancel your subscription at any time. If you cancel, you\'ll still have access to your plan until the end of your billing period.'
              },
              {
                question: 'Is there a discount for non-profits or educational institutions?',
                answer: 'Yes, we offer special pricing for non-profit organizations and educational institutions. Please contact our sales team for more information.'
              },
              {
                question: 'Do you offer a refund if I\'m not satisfied?',
                answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not completely satisfied, contact our support team for a full refund.'
              }
            ];
            
            return (
              <Box sx={{ mt: 4 }}>
                {faqs.map((faq, index) => (
                  <Card 
                    key={index} 
                    sx={{ 
                      mb: 3, 
                      borderRadius: 3, 
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                      overflow: 'hidden',
                      '&:hover': {
                        boxShadow: '0 6px 24px rgba(0,0,0,0.1)',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          mb: 1.5, 
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          color: theme.palette.primary.main
                        }}
                      >
                        {faq.question}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                        {faq.answer}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            );
          })()}
          
          <Box sx={{ mt: 8, textAlign: 'center', p: 4, borderRadius: 4, bgcolor: 'rgba(59, 130, 246, 0.05)' }}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Still have questions?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, maxWidth: 600, mx: 'auto', color: 'text.secondary' }}>
              Our support team is ready to help you choose the right plan for your career goals.
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                mt: 2, 
                borderRadius: 2, 
                py: 1.5, 
                px: 5, 
                bgcolor: '#3B82F6',
                '&:hover': {
                  bgcolor: '#2563EB'
                }
              }}
            >
              Contact Support
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;
