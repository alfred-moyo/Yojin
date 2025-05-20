import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  TextField, 
  Button, 
  Paper, 
  Link as MuiLink,
  Alert,
  useTheme,
  alpha,
  InputAdornment
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    
    // Basic validation
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setIsLoading(true);

    try {
      // This would connect to the actual API in a real implementation
      // const response = await axios.post('/api/auth/forgot-password', { email });
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setSuccessMessage('Password reset instructions have been sent to your email. Please check your inbox.');
      setEmail('');
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper 
        elevation={6} 
        sx={{ 
          mt: 8, 
          p: { xs: 3, md: 5 },
          marginBottom: 10,
          borderRadius: 2,
          background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.95)} 100%)`,
          backdropFilter: 'blur(10px)',
          boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.1)}`,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          transform: animate ? 'translateY(0)' : 'translateY(20px)',
          opacity: animate ? 1 : 0,
          transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography 
            component="h1" 
            variant="h4"
            sx={{ 
              fontWeight: 700, 
              mb: 1,
              background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transform: animate ? 'translateY(0)' : 'translateY(20px)',
              opacity: animate ? 1 : 0,
              transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
              transitionDelay: '0.1s'
            }}
          >
            Reset Your Password
          </Typography>
          
          <Typography 
            variant="subtitle1" 
            align="center"
            sx={{ 
              mb: 3, 
              color: alpha(theme.palette.text.primary, 0.7),
              transform: animate ? 'translateY(0)' : 'translateY(20px)',
              opacity: animate ? 1 : 0,
              transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
              transitionDelay: '0.2s'
            }}
          >
            Enter your email address and we'll send you instructions to reset your password
          </Typography>
          
          {error && (
            <Alert 
              severity="error" 
              sx={{ 
                width: '100%', 
                mb: 2,
                borderRadius: 2,
                transform: animate ? 'translateY(0)' : 'translateY(20px)',
                opacity: animate ? 1 : 0,
                transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
                transitionDelay: '0.3s'
              }}
            >
              {error}
            </Alert>
          )}

          {successMessage && (
            <Alert 
              severity="success" 
              sx={{ 
                width: '100%', 
                mb: 2,
                borderRadius: 2,
                transform: animate ? 'translateY(0)' : 'translateY(20px)',
                opacity: animate ? 1 : 0,
                transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
                transitionDelay: '0.3s'
              }}
            >
              {successMessage}
            </Alert>
          )}
          
          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{ 
              width: '100%',
              transform: animate ? 'translateY(0)' : 'translateY(20px)',
              opacity: animate ? 1 : 0,
              transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
              transitionDelay: '0.4s'
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.primary.main,
                  },
                },
                mb: 2
              }}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                mt: 3, 
                mb: 2,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.4)}`,
                '&:hover': {
                  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.6)}`,
                },
                transition: 'all 0.3s ease'
              }}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Reset Instructions'}
            </Button>
            
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <MuiLink 
                component={Link} 
                to="/login" 
                sx={{ 
                  color: theme.palette.primary.main,
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontWeight: 500
                }}
              >
                <ArrowBackIcon sx={{ fontSize: 16, mr: 0.5 }} />
                Back to Login
              </MuiLink>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ForgotPassword;

