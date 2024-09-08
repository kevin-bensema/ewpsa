import React, { useState, useEffect } from 'react';
import { parseISO, isAfter, compareAsc, format } from 'date-fns';
import { 
  Box, 
  Chip, 
  Typography, 
  List,
  ListItem,
  ListItemText, 
  Link
} from '@mui/material';

const MatchList = ({ jsonUrl }) => {
  const [matches, setMatches] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(jsonUrl);
        const data = await response.json();
        setMatches(data);

        // Extract unique tags
        const allTags = data.flatMap(match => match.Tags);
        const uniqueTags = [...new Set(allTags)];
        setTags(uniqueTags);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();
  }, [jsonUrl]);

  const handleTagClick = (tag) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  const filteredMatches = matches.filter(match => {
    const matchDate = parseISO(match.Date);
    const isInFuture = isAfter(matchDate, new Date());
    return isInFuture && (selectedTag === null || match.Tags.includes(selectedTag));
  }).sort((a, b) => compareAsc(parseISO(a.Date), parseISO(b.Date)));

  return (
    <Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            onClick={() => handleTagClick(tag)}
            color={selectedTag === tag ? 'primary' : 'default'}
            variant={selectedTag === tag ? 'filled' : 'outlined'}
          />
        ))}
      </Box>
      <List>
        {filteredMatches.map((match, index) => (
          <ListItem key={index}>
            <ListItemText>
              <Link href={match.Link} target="_blank" rel="noopener noreferrer">
                {match.Title}
              </Link>
              <Typography variant="body2" color="text.secondary">
                On {format(parseISO(match.Date), "MMMM do, yyyy")}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MatchList;