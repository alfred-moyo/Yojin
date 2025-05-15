import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ResumeUpload from './pages/ResumeUpload';
import Chatbot from './pages/Chatbot';
import NotFound from './pages/NotFound';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Context
export const AuthContext = createContext<{
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  user: any | null;
  setUser: React.Dispatch<React.SetStateAction<any | null>>;
}>({ 
  isLoggedIn: false, 
  setIsLoggedIn: () => {}, 
  user: null, 
  setUser: () => {} 
});

// Create theme with modern look
const theme = createTheme({
  palette: {
    primary: {
      light: '#4983e8',
      main: '#1a56db', // Rich blue
      dark: '#0a2540',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#34d399',
      main: '#10b981', // Emerald green
      dark: '#059669',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f9fafb',
      paper: '#ffffff',
    },
    text: {
      primary: '#111827',
      secondary: '#4b5563',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.0125em',
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          },
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#164db0',
          },
        },
        containedSecondary: {
          '&:hover': {
            backgroundColor: '#0ca36f',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      },
    },
  },
});

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = React.useContext(AuthContext);
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<any | null>(null);

  // Check if user is logged in on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
        <Router>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flexGrow: 1 }}>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/features" element={<Features />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                
                {/* Protected Routes */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/resume" element={
                  <ProtectedRoute>
                    <ResumeUpload />
                  </ProtectedRoute>
                } />
                <Route path="/chatbot" element={
                  <ProtectedRoute>
                    <Chatbot />
                  </ProtectedRoute>
                } />
                
                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
