import React, { useState } from 'react';
import Image from 'next/image';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ImageRatioBox } from '/styled/Images.js';
import { WhiteButton } from '/styled/Buttons.js';
import { PaperGrid } from '/styled/Paper.js';

const Treat = ({ src }) => {
  return (
    <PaperGrid item >
      <ImageRatioBox ratio='100%' >
        <Image priority={true} src={src} alt={src} fill sizes="(max-width: 768px) 100vw, 50vw"  style={{ objectFit: 'contain', borderRadius: 6 }} />
      </ImageRatioBox>
    </PaperGrid>
  )
};

const treatArr = [
  '/treat1.webp',
  '/treat2.webp',
  '/treat3.webp',
  '/treat4.webp',
  '/treat5.webp',
  '/treat7.webp',
  '/treat8.webp',
  '/treat9.webp'
];

const treatTabs = [
  'All',
  'Health',
  'Sweet',
  'Chewables',
  'Rawhide'
];

const DogShop = props => {

  const {
    mobile
  } = props;

  const [ step, setStep ] = useState(0);
  const handleButton = (event, value) => {
    setStep(value)
  };

  return (
    <Grid container item justifyContent='center' style={{ height: '100%', padding: 12, maxWidth: 1000, margin: '0 auto', position: 'relative' }} >
      <Grid container item xs={12} justifyContent='center' flexDirection='column' flexWrap='nowrap' style={{ padding: '8px 16px', zIndex: 2, borderBottom: 'solid 2px rgba(0, 0, 0, .1)' }} >
        <Typography component='p' variant='h2' textAlign='left' >
          {treatTabs[step] ? `Shop ${treatTabs[step]} Treats` : `Shop Treats`}
        </Typography>
      </Grid>
      <Grid container item xs={12} flexWrap='nowrap' style={{ padding: 8, zIndex: 2, overflowX: 'auto', position: 'relative' }} >
        {treatTabs.map((item, index) => (
          <Grid key={index} style={{ padding: 8, borderRadius: 6 }} >
            <WhiteButton variant='contained' onClick={event => handleButton(event, index)} selected={Boolean(step === index)} >
              {item}
            </WhiteButton>
          </Grid>
        ))}
      </Grid>
      <Grid container item justifyContent='center' style={{ position: 'relative', minHeight: 300, marginTop: 8 }} >
        <Grid container item justifyContent='center' style={{ maxWidth: 1000, padding: 6, borderRadius: mobile ? 0 : 8 }} >
          {treatArr.map((item, index) => (
            <Grid key={index} item xs={6} sm={3} style={{ padding: 8, borderRadius: 6, overflow: 'hidden' }} >
              <Treat src={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
};

export default DogShop;
