import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import ListIcon from '@mui/icons-material/List';

import DesktopOnlyMenuIcon from './Components/DesktopOnlyMenuIcon';
import DesktopOnlyBanner from './Components/DesktopOnlyBanner';
import LeagueScores2Gun from './LeagueScores2Gun';

import Home from './Home';
import Matches from './Matches';

import UspsaExplainer from './MatchTypes/USPSA';
import SteelChallengeExplainer from './MatchTypes/SteelChallenge';
import Monthly2GunExplainer from './MatchTypes/Monthly2Gun';
import RedOctoberExplainer from './MatchTypes/RedOctober';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [matchesOpen, setMatchesOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('Home');

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const toggleMatches = () => {
    setMatchesOpen(!matchesOpen);
  };

  const handlePageSelect = (pageName) => {
    setSelectedPage(pageName);
    setDrawerOpen(false);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Our Match Schedule', icon: <EventIcon /> },
    {
      text: 'Matches',
      icon: <EventIcon />,
      subItems: [
        {
          text: 'USPSA',
          icon: <DesktopOnlyMenuIcon imagePath="images/icons/USPSA-Logo_rgb_64x64.png" altText="USPSA logo" />
        },
        {
            text: 'Steel Challenge',
            icon: <DesktopOnlyMenuIcon imagePath='images/icons/SCSA-Logo_96x96.png' altText='Steel Challenge logo' />
        },
        {
            text: 'Monthly 2-Gun',
            icon: <DesktopOnlyMenuIcon imagePath="images/icons/2Gun_96x96.png" altText="2-Gun logo" />
        },
        {
            text: 'Summer 3-Gun',
            icon: <DesktopOnlyMenuIcon imagePath="images/icons/3Gun_96x96.png" altText="3-Gun logo" />
        },
        {
            text: 'Action 2-Gun',
            icon: <DesktopOnlyMenuIcon imagePath="images/icons/Kettlebell_96x96.png" altText="Action 2-Gun logo" />
        },
        {
          text:'Red October',
          icon: <DesktopOnlyMenuIcon imagePath="images/icons/RedAKInCircle64x64.png" altText="Red October logo" />
        }
      ]
    },
    { text: '2-Gun Standings', icon: <ListIcon /> },
    { text: '3-Gun Standings', icon: <ListIcon /> },
  ];

  const renderMenuItem = (item, index) => (
    <React.Fragment key={index}>
      <ListItem 
        button 
        onClick={item.subItems ? toggleMatches : () => handlePageSelect(item.text)}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
        {item.subItems && (matchesOpen ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {item.subItems && (
        <Collapse in={matchesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.subItems.map((subItem, subIndex) => (
              <ListItem 
                button 
                key={subIndex} 
                sx={{ pl: 4 }}
                onClick={() => handlePageSelect(typeof subItem === 'string' ? subItem : subItem.text)}
              >
                {typeof subItem === 'string' ? (
                  <ListItemText primary={subItem} />
                ) : (
                  <>
                    <ListItemIcon>{subItem.icon}</ListItemIcon>
                    <ListItemText primary={subItem.text} />
                  </>
                )}
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </React.Fragment>
  );

  const renderContent = () => {
    switch(selectedPage) {
      case 'Home':
        return (
          <Home />
        );
      case 'Our Match Schedule':
        return (
            <Matches />
        );
      case '2-Gun Standings':
        return (
            <LeagueScores2Gun />
        );
      case '3-Gun Standings':
        return (
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              3-Gun Standings
            </Typography>
            <Typography variant="body1">
              Current standings for 3-Gun competitions.
            </Typography>
          </Box>
        );
      case 'USPSA':
        return (
            <UspsaExplainer />
        );
      case 'Steel Challenge':
        return (
            <SteelChallengeExplainer />
        );
      case 'Monthly 2-Gun':
        return (
            <Monthly2GunExplainer />
        );
      case 'Red October':
        return (
            <RedOctoberExplainer />
        );
      default:
        return (
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              {selectedPage}
            </Typography>
            <Typography variant="body1">
              Content for {selectedPage} goes here.
            </Typography>
          </Box>
        );
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <DesktopOnlyBanner imageSrc='Banner50pct.jpg' altText='EWPSA Banner'/>  
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Eastern Washington Practical Shooters Association
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
        >
          <List>
            {menuItems.map(renderMenuItem)}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ p: 3 }}>
        {renderContent()}
      </Box>
    </Box>
  );
};

export default App;