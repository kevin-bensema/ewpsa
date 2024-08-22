import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  CircularProgress,
  TextField,
  Box
} from '@mui/material';

const CSVTable = ({ csvUrl }) => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch(csvUrl);
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');
        const csv = decoder.decode(result.value);
        
        Papa.parse(csv, {
          complete: (results) => {
            setHeaders(results.data[0]);
            // Add row number to each row
            const dataWithRowNumbers = results.data.slice(1).map((row, index) => [index + 1, ...row]);
            setData(dataWithRowNumbers);
            setLoading(false);
          },
          header: false
        });
      } catch (error) {
        console.error('Error fetching or parsing CSV:', error);
        setLoading(false);
      }
    };

    fetchCSV();
  }, [csvUrl]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(row => 
    row[1].toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <TextField
        label="Search for a shooter by name"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="CSV data table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              {headers.map((header, index) => (
                <TableCell key={index}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row[0]}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CSVTable;