import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

export const FooterContainerStyled = styled(Grid)(({ theme }) => ({
  overflow: 'hidden',
  padding: 24,
  borderTop: theme.palette.content.border,
  background: theme.palette.content.footer
}));

export const FooterBoxStyled = styled(Grid)(({ theme }) => ({
  maxWidth: 880,
  padding: '36px 0px 24px',
  margin: '0 auto',
  flexFlow: 'column',
}));
