import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const AppHeader = () => {
  return (
    <AppBar
      position='static'
      elevation={0}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'custom.border.subtle',
      }}
    >
      <Toolbar disableGutters sx={{ px: 3, py: 1 }}>
        <Typography variant='h6' fontWeight={600}>
          Product Enhancer
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            px: 1.5,
            py: 0.5,
            border: '1px solid',
            borderColor: 'custom.border.subtle',
            borderRadius: '32px',
            backgroundColor: '#fff',
          }}
        >
          <Box
            component='img'
            src='/logo-singer.png'
            alt='logo'
            sx={{ height: 24, width: 'auto' }}
          />
          <ArrowDropDownIcon sx={{ color: 'text.primary' }} />
          <Avatar src='/avatar.png' sx={{ width: 32, height: 32 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
