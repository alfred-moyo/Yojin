import React, { useState } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  Container, 
  Avatar, 
  Button, 
  Tooltip, 
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import { 
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Person as PersonIcon, 
  School as SchoolIcon,
  Work as WorkIcon,
  Assignment as AssignmentIcon,
  Chat as ChatIcon,
  Logout as LogoutIcon 
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

// This is a placeholder - in a real application, this would come from authentication context
const isLoggedIn = false;

const pages = isLoggedIn 
  ? ['Dashboard', 'Resume', 'Jobs', 'Learning', 'Chat'] 
  : ['Features', 'Pricing', 'About'];

const settings = ['Profile', 'Account', 'Logout'];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuItemClick = (page: string) => {
    handleCloseNavMenu();
    
    // Navigate based on page name
    switch(page.toLowerCase()) {
      case 'dashboard':
        navigate('/dashboard');
        break;
      case 'resume':
        navigate('/resume');
        break;
      case 'jobs':
        navigate('/jobs');
        break;
      case 'learning':
        navigate('/learning');
        break;
      case 'chat':
        navigate('/chatbot');
        break;
      case 'features':
        navigate('/features');
        break;
      case 'pricing':
        navigate('/pricing');
        break;
      case 'about':
        navigate('/about');
        break;
      default:
        break;
    }
  };

  const handleUserMenuItemClick = (setting: string) => {
    handleCloseUserMenu();
    
    // Handle user menu actions
    switch(setting.toLowerCase()) {
      case 'profile':
        navigate('/profile');
        break;
      case 'account':
        navigate('/account');
        break;
      case 'logout':
        // Would call logout function from auth context in a real app
        console.log('Logging out...');
        navigate('/');
        break;
      default:
        break;
    }
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const getIconForPage = (page: string) => {
    switch(page.toLowerCase()) {
      case 'dashboard':
        return <DashboardIcon />;
      case 'resume':
        return <AssignmentIcon />;
      case 'jobs':
        return <WorkIcon />;
      case 'learning':
        return <SchoolIcon />;
      case 'chat':
        return <ChatIcon />;
      default:
        return null;
    }
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          p: 2,
          bgcolor: 'primary.main',
          color: 'white'
        }}
      >
        <Typography variant="h6" component="div" sx={{ my: 2 }}>
          Yōjin
        </Typography>
      </Box>
      <Divider />
      <List>
        {isLoggedIn ? (
          <>
            <ListItem component="div" sx={{ cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem component="div" sx={{ cursor: 'pointer' }} onClick={() => navigate('/resume')}>
              <ListItemIcon><AssignmentIcon /></ListItemIcon>
              <ListItemText primary="Resume" />
            </ListItem>
            <ListItem component="div" sx={{ cursor: 'pointer' }} onClick={() => navigate('/jobs')}>
              <ListItemIcon><WorkIcon /></ListItemIcon>
              <ListItemText primary="Jobs" />
            </ListItem>
            <ListItem component="div" sx={{ cursor: 'pointer' }} onClick={() => navigate('/learning')}>
              <ListItemIcon><SchoolIcon /></ListItemIcon>
              <ListItemText primary="Learning" />
            </ListItem>
            <ListItem component="div" sx={{ cursor: 'pointer' }} onClick={() => navigate('/chatbot')}>
              <ListItemIcon><ChatIcon /></ListItemIcon>
              <ListItemText primary="Career Assistant" />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem component="div" sx={{ cursor: 'pointer' }} onClick={() => navigate('/features')}>
              <ListItemText primary="Features" />
            </ListItem>
            <ListItem component="div" sx={{ cursor: 'pointer' }} onClick={() => navigate('/pricing')}>
              <ListItemText primary="Pricing" />
            </ListItem>
            <ListItem component="div" sx={{ cursor: 'pointer' }} onClick={() => navigate('/about')}>
              <ListItemText primary="About" />
            </ListItem>
          </>
        )}
      </List>
      <Divider />
      {isLoggedIn && (
        <List>
          <ListItem component="div" sx={{ cursor: 'pointer' }} onClick={() => navigate('/profile')}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem component="div" sx={{ cursor: 'pointer' }} onClick={() => console.log('Logout')}>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      )}
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo - Desktop */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Yōjin
            </Typography>

            {/* Mobile menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawer}
              </Drawer>
            </Box>

            {/* Logo - Mobile */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Yōjin
            </Typography>

            {/* Desktop menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleMenuItemClick(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* User menu / Login buttons */}
            <Box sx={{ flexGrow: 0 }}>
              {isLoggedIn ? (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar>U</Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={() => handleUserMenuItemClick(setting)}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <Box sx={{ display: 'flex' }}>
                  <Button 
                    color="inherit" 
                    component={Link} 
                    to="/login"
                    sx={{ mr: 1 }}
                  >
                    Login
                  </Button>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    component={Link} 
                    to="/register"
                  >
                    Sign Up
                  </Button>
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;

