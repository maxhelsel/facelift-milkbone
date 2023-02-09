import React from 'react';
import Image from 'next/image';

import Carousel from 'nuka-carousel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PawIcon from '@mui/icons-material/Pets';

import { ImageRatioBox } from '/styled/Images.js';
import { RedButton } from '/styled/Buttons.js';
import { PaperGrid } from '/styled/Paper.js';

const Dog = ({ src }) => {
  return (
    <Grid item >
      <ImageRatioBox ratio='100%' >
        <Image priority={true} src={src} alt={src} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'contain', borderRadius: 6 }} />
      </ImageRatioBox>
    </Grid>
  )
};

const dogArr = [
  '/dog1.jpeg',
  '/dog2.jpeg',
  '/dog7.jpeg',
  '/dog4.jpeg',
  '/dog6.jpeg',
  '/dog5.jpeg'
];



const DogHero = props => {

  const {
    mobile
  } = props;

  return (
    <Grid container item justifyContent='center' style={{ height: '100%', padding: 12, maxWidth: 1200, margin: '0 auto', position: 'relative', marginTop: mobile ? 110 : 160 }} >
      <Grid container item justifyContent='center' flexDirection={props.mobile ? 'column' : 'row'} flexWrap='nowrap' style={{ padding: '0px 0px', maxWidth: 1000 }} >
        <Grid container item xs={12} sm={6} justifyContent='center' flexDirection='column' flexWrap='nowrap' style={{ padding: '0px 0px', zIndex: 3 }} >
          <Typography component='p' variant='h1' >
            {`Best friends`}
          </Typography>
          <Typography component='p' variant='h1' style={{ color: '#678' }} >
            {`deserve the`}
          </Typography>
          <Typography component='p' variant='h1' >
            {`best treats`}
          </Typography>
          <Typography component='p' textAlign='left' variant='h1' style={{ color: '#678' }} >
            <PawIcon style={{ width: 48, height: 48, color: '#678' }} />
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent='center' alignItems='center' style={{ bottom: mobile ? 30 : undefined, position: 'relative' }} >
          <Grid container item style={{ maxWidth: 400, margin: '0 auto' }}>
            <ImageRatioBox ratio='100%' >
              <Image priority={true} src='/dog3.jpeg' fill alt='top dog' sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'contain', borderRadius: 6 }} />
            </ImageRatioBox>
          </Grid>
        </Grid>
      </Grid>
      {mobile
        ? null
        : <Grid container item justifyContent='center' style={{ position: 'relative', zIndex: 2, bottom: mobile ? 0 : 72 }} >
            <Grid container item justifyContent='center' style={{ maxWidth: 1200, padding: 6, borderRadius: mobile ? 0 : 8 }} >
              <Carousel
                autoplay
                autoplayInterval={2500}
                withoutControls
                slidesToShow={props.mobile ? 3 : 5}
                wrapAround
                speed={1000}
              >
                {dogArr.map((item, index) => (
                  <Grid key={index} item style={{ padding: 8, borderRadius: 6, overflow: 'hidden' }} >
                    <Dog src={item} />
                  </Grid>
                ))}
              </Carousel>
            </Grid>
          </Grid>
      }
    </Grid>
  )
};

export default DogHero;
