// HeroSection.js
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ConnectCard from './ConnectCard';
import pic from '../assets/images/test-photo.jpg'
const ConnectionsSection = () => {
    return (
        <Container>
            <div>
                <Typography variant="h4" component="h1">
                    Connections
                </Typography>

            </div>


            <div className='view-mentor'>

                <div>

                    <Typography variant="subtitle1" color="textSecondary">
                        All of your connections are displayed here.
                    </Typography>
                </div>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={3}>
                        <ConnectCard imageSrc={pic} title="Test Name" />
                    </Grid>
                    <Grid item xs={3}>
                        <ConnectCard imageSrc={pic} title="Test Name" />
                    </Grid>
                    <Grid item xs={3}>
                        <ConnectCard imageSrc={pic} title="Test Name" />
                    </Grid>
                    <Grid item xs={3}>
                        <ConnectCard imageSrc={pic} title="Test Name" />
                    </Grid>

                </Grid>
            </div>
        </Container>
    );
};

export default ConnectionsSection;
