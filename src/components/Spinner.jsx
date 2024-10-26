// src/components/Spinner.jsx
import * as React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';

export default function Spinner() {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px' }}>
      <Stack spacing={2} sx={{ flex: 1 }}>
        {/* Displaying multiple LinearProgress bars as spinners */}
        <LinearProgress color="primary" />
        <LinearProgress color="neutral" />
        <LinearProgress color="danger" />
        <LinearProgress color="success" />
        <LinearProgress color="warning" />
      </Stack>
    </Box>
  );
}
