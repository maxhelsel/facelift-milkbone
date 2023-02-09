import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

export const PaperGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.content.paper,
  boxShadow: theme.palette.content.shadow,
  borderRadius: '12px',
  overflow: 'hidden'
}));
