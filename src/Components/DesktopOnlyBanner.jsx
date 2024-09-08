import React from 'react';
import { Box } from '@mui/material';
import useIsMobile from './CommonFunctions';

const DesktopOnlyBanner = ({ imageSrc, altText }) => {
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
        maxHeight: '400px', // Set maximum height to 400px
        objectFit: 'cover',
        objectPosition: 'center', // Ensure the image is centered if it needs to be cropped
      }}
    />
  );
};

export default DesktopOnlyBanner;