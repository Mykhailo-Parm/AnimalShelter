import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './../../logo.svg';
import {
    AppBar,
    Box,
    Container,
    IconButton,
    Toolbar,
    Typography,
    Menu,
    MenuItem,
    Button,
    Tooltip,
    Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useGlobalState} from "../../context/GlobalStateContext";

const clientPages = [
    { displayName: 'All Animals', linkTo: '/animals' },
    { displayName: 'Dogs', linkTo: '/dogs' },
    { displayName: 'Cats', linkTo: '/cats' },
    { displayName: 'Other Animals', linkTo: '/other' }
];

const adminPages = [
    { displayName: 'Add Animals', linkTo: '/admin/animals' },
    { displayName: 'All Applications', linkTo: '/admin/applications' }
];
const clientSettings = [
    { displayName: 'Profile', linkTo: "profile" },
    { displayName: 'My Adoption Applications', linkTo: "applications" }
];
const adminSettings = [
    { displayName: 'My Profile', linkTo: "profile" }
];

function Header() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(1); // Track user authentication status
    const { isClientView, toggleView } = useGlobalState(); // Destructure isClientView and toggleView from global state

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const pages = isClientView ? clientPages : adminPages;
    const settings = isClientView ? clientSettings : adminSettings;

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <CustomLogo2 src={Logo} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link style={{ color: 'white', textDecoration: 'none' }} to={'/'}>
                            Animal Shelter
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.displayName} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link
                                            style={{ textDecoration: 'none', color: 'black' }}
                                            to={page.linkTo}
                                        >
                                            {page.displayName}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Render navigation links based on current view mode */}
                    <Box sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                        {pages.map((page) => (
                            <Button
                                key={page.displayName}
                                component={Link}
                                to={page.linkTo}
                                color="inherit"
                                sx={{ mx: 1 }}
                            >
                                {page.displayName}
                            </Button>
                        ))}
                    </Box>

                    {/* Render settings menu based on current view mode */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
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
                                <MenuItem key={setting.displayName} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">
                                        <Link to={`/${setting.linkTo}`}>{setting.displayName}</Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Button component={Link} to="/" onClick={toggleView} color="inherit">
                        {isClientView ? 'Switch to Admin View' : 'Switch to Client View'}
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );

}

const CustomLogo = styled('img')({
    height: 80,
    display: 'flex',
    '@media (min-width: 900px)': {
        display: 'none',
    },
    marginRight: '8px', // Adjust this value based on your needs
});
const CustomLogo2 = styled('img')({
    height: 80,
    display: 'none',
    '@media (min-width: 900px)': {
        display: 'flex',
    },
    marginRight: '8px', // Adjust this value based on your needs
});

export default Header;
