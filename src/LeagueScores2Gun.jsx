import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import CSVTable from './Components/CsvTable';

const LeagueScores2Gun = () => {
    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4">Standings for 2024 Monthly 2-Gun League</Typography>
                <CSVTable csvUrl="./ewpsa/Standings_2Gun.csv"/>
            </Box>
        </Container>
    );
};

export default LeagueScores2Gun;