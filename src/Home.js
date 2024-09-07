import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const Home = () => {
    return (
        <Container maxWidth = "md">
            <Box sx={{ my: 4 }}>
                <Typography variant="body1" paragraph>
                Is a USPSA affiliated club that hosts Monthly USPSA pistol matches, Steel Challenge, and multigun events at the Rattlesnake Mountain Shooting Facility. 
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;
