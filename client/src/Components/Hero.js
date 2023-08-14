// HeroSection.js
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HeroCard from './HeroCard';
import pic from '../assets/images/test-photo.jpg';

const HeroSection = () => {
    return (
        <Container>
            <div>
                <Typography variant="h4" component="h1">
                    Mentors
                </Typography>
            </div>

            <div className='view-mentor'>
                <div>
                    <Typography variant="subtitle1" color="textSecondary">
                        View all mentors
                    </Typography>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <HeroCard imageSrc={pic} title="Mentor 1" />
                    </Grid>
                    <Grid item xs={3}>
                        <HeroCard imageSrc={pic} title="Mentor 2" />
                    </Grid>
                    <Grid item xs={3}>
                        <HeroCard imageSrc={pic} title="Mentor 3" />
                    </Grid>
                    <Grid item xs={3}>
                        <HeroCard imageSrc={pic} title="Mentor 4" />
                    </Grid>
                </Grid>
            </div>

            <div style={{ marginTop: '8rem' }}>
                <Typography variant="h4" component="h1">
                    Mentees
                </Typography>
            </div>

            <div className='view-mentor'>
                <div>
                    <Typography variant="subtitle1" color="textSecondary">
                        View all mentees
                    </Typography>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <HeroCard imageSrc={pic} title="Mentee 1" />
                    </Grid>
                    <Grid item xs={3}>
                        <HeroCard imageSrc={pic} title="Mentee 2" />
                    </Grid>
                    <Grid item xs={3}>
                        <HeroCard imageSrc={pic} title="Mentee 3" />
                    </Grid>
                    <Grid item xs={3}>
                        <HeroCard imageSrc={pic} title="Mentee 4" />
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default HeroSection;

