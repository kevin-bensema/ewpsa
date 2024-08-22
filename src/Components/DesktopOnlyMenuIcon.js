import React from 'react';
import { Box } from '@mui/material';
import useIsMobile from './CommonFunctions';

const DesktopOnlyMenuIcon = ({ imagePath, altText }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return null;
  }

  return (
    <Box
      component="img"
      sx={{
        height: 32,
        width: 32,
        objectFit: 'contain'
      }}
      alt={altText}
      src={imagePath}
    />
  );
};

export default DesktopOnlyMenuIcon;