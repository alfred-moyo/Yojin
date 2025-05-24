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
