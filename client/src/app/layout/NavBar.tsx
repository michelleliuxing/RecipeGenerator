import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';

const pages = ['Home', 'My Pets', 'Recipes', 'About'];
const settings = ['Profile', 'Account', 'Settings', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: 'linear-gradient(135deg, #f9dba8 0%, #fbf5eb 50%,rgb(249, 233, 201) 100%)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        backdropFilter: 'blur(20px)'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 1
          }}
        >
          {/* Left: Logo and Brand */}
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="/logo_clear_background.PNG"
              alt="PawfectBites Logo"
              sx={{
                height: 45,
                width: 'auto',
                mr: 2,
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: '"Poppins", "Varela Round", "Arial", sans-serif',
                fontWeight: 700,
                letterSpacing: '.05rem',
                color: '#8B4513',
                textDecoration: 'none',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                background: 'linear-gradient(45deg, #D2691E, #CD853F)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                display: { xs: 'none', sm: 'flex' }
              }}
            >
              PawfectBites
            </Typography>
          </Box>

          {/* Center: Navigation */}
          <Box sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            gap: 1
          }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseUserMenu}
                sx={{
                  my: 1,
                  px: 3,
                  py: 1,
                  color: '#8B4513',
                  fontWeight: 500,
                  textTransform: 'none',
                  borderRadius: 25,
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(139, 69, 19, 0.08)',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 12px rgba(139, 69, 19, 0.15)'
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Right: User Menu */}
          <Box sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 25,
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(139, 69, 19, 0.1)',
                p: 0.5
              }}
            >
              <Tooltip title="My Profile">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{
                    p: 0.5,
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  <Avatar
                    alt="User Avatar"
                    src="/static/images/avatar/2.jpg"
                    sx={{
                      width: 36,
                      height: 36,
                      border: '2px solid rgba(139, 69, 19, 0.2)'
                    }}
                  />
                </IconButton>
              </Tooltip>
            </Paper>

            <Menu
              sx={{
                mt: '50px',
                '& .MuiPaper-root': {
                  borderRadius: 3,
                  background: 'rgba(255, 248, 225, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(139, 69, 19, 0.1)',
                  boxShadow: '0 8px 32px rgba(139, 69, 19, 0.15)'
                }
              }}
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
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  sx={{
                    px: 3,
                    py: 1.5,
                    '&:hover': {
                      background: 'rgba(139, 69, 19, 0.08)'
                    }
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: 'center',
                      color: '#8B4513',
                      fontWeight: 500
                    }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;