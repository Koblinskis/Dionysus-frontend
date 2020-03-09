import React from 'react';
import { NavLink } from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Box, IconButton, MenuItem, Button, Typography, InputBase, Badge, Menu, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import { useCookies } from 'react-cookie'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    color: theme.palette.common.white,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  whiteColor: {
    color: 'white',
    textDecoration: 'none'
  },
  list: {
    width: 250,
    height: '100%'
  },
  fullList: {
    width: 'auto',
  },
  menuTitle: {
    fontWeight: '600',
    padding: '20px'
  },
  logOut: {
    color: '#cc0000',
  },
  menuList: {
    color: '#000000'
  },
  menuSList: {
    color: '#000000'
  },
  menuWList: {
    color: '#000000'
  },
  menuEList: {
    color: '#000000'
  },
  menuRList: {
    color: '#000000'
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [login, setLogin] = React.useState(true)
  const [cookie, setCookie, removeCookie] = useCookies(['token'])
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  React.useEffect(() => {
    console.log(cookie.token)
    if(cookie.token !== undefined){
      setLogin(false)
    }
  }, [cookie])

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const postLogout = async() => {
    try {
      const res = await fetch(process.env.REACT_APP_NODE_URL + 'logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + cookie.token,
        }
      })
      return res
    } catch (e) {
      console.error('Error:', e)
      alert(e)
    }
  }

  const logout = async () => {
    const res = await postLogout()
    console.log(res)
    removeCookie('token')
    setLogin(true)
    handleMenuClose()
    window.location.reload()
  }

  const sideList = side => (
    <Box
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
      bgcolor='success.main'
    >
      <Typography variant='h4' className={classes.menuTitle}>Menu</Typography>
            <Divider color='primary' />
      <List>
          <ListItem button component={NavLink} to={'/'}>
            <ListItemText primary={'Home'} />
            <HomeIcon />
          </ListItem>
          <ListItem button component={NavLink} to={'/profile'}>
            <ListItemText primary={'Profile'} />
            <AccountCircle />
          </ListItem>
          <ListItem button component={NavLink} to={'/settings'}>
            <ListItemText primary={'Settings'} />
            <SettingsIcon />
          </ListItem>
          <ListItem button component={NavLink} to={'/about'}>
            <ListItemText primary={'About'} />
            <InfoIcon />
          </ListItem>
          <ListItem button onClick={logout} className={classes.logOut}>
            <ListItemText primary={'Logout'} />
            <ExitToAppIcon />
          </ListItem>
      </List>
    </Box>
  );

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      color='success.main'
    >
      <MenuItem onClick={handleMenuClose} component={NavLink} to={'profile'} className={classes.menuList}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose} component={NavLink} to={'settings'} className={classes.menuList}>Settings</MenuItem>
      <MenuItem onClick={logout} className={classes.logOut}>Logout</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={NavLink} to={'/additempage'}>
        <IconButton aria-label="show 4 new mails">
          <Badge badgeContent={0} color="error">
            <AddIcon />
          </Badge>
        </IconButton>
        <p>Add Item</p>
      </MenuItem>
      <MenuItem component={NavLink} to={'profile'}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem component={NavLink} to={'settings'}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <SettingsIcon />
        </IconButton>
        <p>Settings</p>
      </MenuItem>
      <MenuItem className={classes.logOut}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          onClick={logout}
        >
          <ExitToAppIcon />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box className={classes.grow}>
      <AppBar position="static" color='primary'>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
          {sideList('left')}
        </Drawer>
        <Toolbar>
          {!login && <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="open drawer"
            className={classes.whiteColor}
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon /> 
          </IconButton>}
          <Typography className={classes.title} variant="h6" noWrap>
            Dionysus
          </Typography>
          <Box>
            <Button variant="contained" size='small' onClick={props.changeTheme}>
              dark
            </Button>
            <Button variant="contained" size='small' onClick={props.changeTheme}>
              default
            </Button>
            
          </Box>
          <Box className={classes.grow} />
          <Box className={classes.sectionDesktop}>
            { login
              ? 
              <Box>
                <Button>
                  <NavLink to="/login" className={classes.whiteColor}>Login</NavLink>
                </Button>/
                <Button>
                  <NavLink to="/registration" className={classes.whiteColor}>Signup</NavLink>
                </Button>
              </Box>
              :
              <Box>
                <IconButton aria-label="show 4 new mails" className={classes.whiteColor} component={NavLink} to={'/additempage'}>
                  <Badge badgeContent={0} color="error">
                    <AddIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  className={classes.whiteColor}
                >
                  <AccountCircle />
                </IconButton>
              </Box>
            }
          </Box>
          <Box className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              className={classes.whiteColor}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}