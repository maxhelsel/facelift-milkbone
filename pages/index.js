import Head from 'next/head';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import LandingNavbar from '/ui/navigation/LandingNavbar.js';
import DogHero from '/ui/top/DogHero.js';
import DogShop from '/ui/top/DogShop.js';

import FooterBox from '/ui/navigation/FooterBox.js';

function Index() {

  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Head>
        <title>Milkbone Demo</title>
        <meta name="description" content="Description of whatever" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/smiley.png" />
      </Head>
      <LandingNavbar />
      <main className='main' >
        <DogHero mobile={mobile} />
        <DogShop mobile={mobile} />
        <Grid container flexDirection='column' flexWrap='nowrap' alignItems='center' style={{ padding: '64px 24px' }} >
          <Typography component='p' variant='h4' textAlign='center' >
            {`DEMO PURPOSES ONLY`}
          </Typography>
          <Typography component='p' variant='h4' textAlign='center' >
            {`NOT AFFILIATED WITH COMPANY`}
          </Typography>
        </Grid>
        <FooterBox mobile={mobile} />
      </main>
    </>
  )
}

export default Index;
