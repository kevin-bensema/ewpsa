import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const Home = () => {
    return (
        <Container maxWidth = "md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h3">Welcome to the EWPSA Website</Typography>

                <Typography variant="body1" paragraph>
                    The Eastern Washington Practical Shooters Association (EWPSA) is a USPSA affiliated club located in Benton City, Washington. 
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;
