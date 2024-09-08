import React from 'react';
import { Button } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';

const FileDownload = ({ fileName, displayName }) => {
  const handleDownload = () => {
    // Construct the full URL for the file
    const fileURL = `${import.meta.env.BASE_URL}${fileName}`;
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName);
    
    // Append to body, click programmatically and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<DownloadIcon />}
      onClick={handleDownload}
    >
      Download {displayName || fileName}
    </Button>
  );
};

export default FileDownload;