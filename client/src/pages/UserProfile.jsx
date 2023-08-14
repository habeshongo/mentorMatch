import { Container, Box, Typography, Button, Avatar } from '@mui/material';
import React from 'react';
import avatar from '../assets/images/test-photo.jpg';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    return (
        <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                    <Box display="flex" alignItems="center">
                        <Avatar src={avatar} variant="circular" alt="avatar" sx={{ width: 150, height: 150, marginRight: 10 }} />
                        <Box>
                            <Typography variant="h4" sx={{ marginBottom: 1 }}>Test User </Typography>
                           
                        </Box>
                    </Box>

                    <Link to="/edit-profile" style={{ textDecoration: 'none' }}>
                                <Button variant="outlined">Edit Your Profile</Button>
                            </Link>
                </Box>

                <Box display="flex" gap={4}>
                    <Box flex={1}>
                        <Box bgcolor="white" borderRadius={10} p={3} mb={4}>
                            <Typography variant="h5" mb={2}>About Me</Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam necessitatibus laboriosam consequuntur ea cum aspernatur quisquam a similique quia?
                            </Typography>
                        </Box>
                        <Box bgcolor="white" borderRadius={10} p={3}>
                            <Box mb={2}>
                                <Typography variant="h5">Interests</Typography>
                                <Typography>Software Development</Typography>
                                <Typography>I built a mentor match website with 1 million users.</Typography>
                            </Box>
                            <Box mb={2}>
                                <Typography variant="h6">Woodworking</Typography>
                                <Typography>Looking to build the next big site.</Typography>
                            </Box>
                            
                        </Box>
                    </Box>
                    <Box flex={1}>
                        <Box bgcolor="white" borderRadius={10} p={3}>
                            <Typography variant="h5" mb={2}>Expertise</Typography>
                            <Box mb={3}>
                                <Typography>Gardening, 10 years experience</Typography>
                                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cum. Rem ullam laboriosam soluta quibusdam, voluptatibus m?</Typography>
                            </Box>
                            {/* Repeat for other expertise */}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default UserProfile;
