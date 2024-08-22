import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { AppBar, Tabs, Tab, Box, Toolbar, Typography } from '@mui/material';

import Home from './Home';
import LeagueScores2Gun from './LeagueScores2Gun';
import Matches from './Matches';

const League3Gun = () => <Typography variant="h3">Standings for 2024 Summer 3-Gun League</Typography>;
const SocialMedia = () => <Typography variant="h3">EWPSA's Social Media Accounts</Typography>;

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      {/* Banner */}
      <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
              EWPSA
            </Typography>
          </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Tabs 
            value={value}
            onChange={handleChange}
            centered
            variant="scrollable"
            scrollButtons="auto">
            <Tab label="Home"
                 component={Link}
                 to="/"
                 sx={{ '&.Mui-selected': { color: 'gold' } }} />
            <Tab label="Matches"
                 component={Link}
                 to="/matches"
                 sx={{ '&.Mui-selected': { color: 'gold' } }} />
            <Tab label="2-Gun League Standings"
                 component={Link}
                 to="/league2gun"
                 sx={{ '&.Mui-selected': { color: 'gold' } }} />
            <Tab label="3-Gun League Standings"
                 component={Link}
                 to="/league3gun"
                 sx={{ '&.Mui-selected': { color: 'gold' } }} />
            <Tab label="Social Media" 
                 component={Link}
                 to="/socialmedia"
                 sx={{ '&.Mui-selected': { color: 'gold' } }} />
          </Tabs>
        </AppBar>
        <Box sx={{ padding: 3}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="matches" element={<Matches />} />
            <Route path="league2gun" element={<LeagueScores2Gun />} />
            <Route path="league3gun" element={<League3Gun />} />
            <Route path="socialmedia" element={<SocialMedia />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
