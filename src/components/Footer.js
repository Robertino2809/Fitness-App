import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '12px' } }} mt="41px" textAlign="center" pb="40px">Made by Robertino Puhanić</Typography>
  </Box>
);

export default Footer;