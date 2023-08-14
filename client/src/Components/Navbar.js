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
                    Mentor Match
                </Typography>

                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ color: 'white', fontWeight: 'bold' }}>Home</Button>
                </Link>

                <Link to="/users" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ color: 'white', fontWeight: 'bold' }}>Users</Button>
                </Link>

                <Link to="/user" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ color: 'white', fontWeight: 'bold' }}>Profile</Button>
                </Link>

                <Link to="/connection" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ color: 'white', fontWeight: 'bold' }}>Connections</Button>
                </Link>

                <Link to="/message" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ color: 'white', fontWeight: 'bold' }}>Messages</Button>
                </Link>

            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
