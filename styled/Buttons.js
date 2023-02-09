import React, { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const RedButton = styled(Button)(({ theme }) => ({
  padding: '8px 12px',
  whiteSpace: 'nowrap',
  textTransform: 'none',
  fontWeight: 600,
  background: 'tomato',
  color: '#bf360c',
  borderColor: '#db232e',
  '&:hover': {
    background: '#ffe0b2'
  }
}));

export const WhiteButton = styled(Button)(({ theme, selected }) => ({
  padding: '8px 12px',
  whiteSpace: 'nowrap',
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: 8,
  background: selected ? '#bf360c' : 'white',
  color: selected ? 'white' : '#bf360c',
  borderColor: '#db232e',
  '&:hover': {
    background: '#ffe0b2'
  }
}));
