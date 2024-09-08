import React from 'react';
import { Box } from '@mui/material';
import useIsMobile from './CommonFunctions';

const DesktopArticleImage = ({ imageUrl, altText, imgWidth, imgHeight }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return null;
  }

  return (
    <Box
      component="img"
      src={imageUrl}
      alt={altText}
      sx={{
        width: {imgWidth},
        height: {imgHeight},
        float: 'left',
        marginRight: 2,
        marginBottom: 1,
      }}
    />
  );
};
export default DesktopArticleImage;