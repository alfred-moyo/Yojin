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
