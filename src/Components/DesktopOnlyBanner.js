import React from 'react';
import { Box } from '@mui/material';
import useIsMobile from './CommonFunctions';

const DesktopOnlyBanner = ({ imageSrc, altText}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return null;
  }

  return (
    <Box
      component="img"
      src={imageSrc}
      alt={altText}
      sx={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  );
};

export default DesktopOnlyBanner;