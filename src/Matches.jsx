import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import MatchList from './Components/MatchList';

const Matches = () => {
    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4">Upcoming Matches</Typography>
                <Typography variant="body1" paragraph>
                You can always find all of our matches on <a href="https://practiscore.com/clubs/ewpsa-2">Practiscore</a>. Below are 
                direct links to registration for some upcoming matches in 2024.
                </Typography>
                <MatchList jsonUrl="matches.json"/>
            </Box>
        </Container>
    );
};

export default Matches;