import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#333' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/connections" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ color: 'white', fontWeight: 'bold' }}>Mentor Match</Button>
                </Link>
                </Typography>

                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ color: 'white', fontWeight: 'bold' }}>Home</Button>
                </Link>


                <Link to="/profile" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ color: 'white', fontWeight: 'bold' }}>Profile</Button>
                </Link>

                <Link to="/connections" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ color: 'white', fontWeight: 'bold' }}>Connections</Button>
                </Link>
                <Link to="/edit" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ color: 'white', fontWeight: 'bold' }}>Edit Profile</Button>
                </Link>

                <Link to="/chat" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ color: 'white', fontWeight: 'bold' }}>Messages</Button>
                </Link>

            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
