import React from 'react';
import Image from 'next/image';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

import { ImageWrapperStyled } from '/styled/Images.js';
import { FooterContainerStyled, FooterBoxStyled } from '/styled/Boxes.js';
import DarkLogo from '/public/maxLogoDark.png';

const FooterBox = props => {

  return (
    <FooterContainerStyled >
      <FooterBoxStyled >
        <Grid container item style={{ flexFlow: 'row', paddingBottom: 24 }} >
          <Grid container item style={{ maxWidth: 100, position: 'relative' }} >
            <Link href='https://www.maxhelsel.com' target='_blank' rel='noopener' style={{ display: 'flex', flex: 1 }} >
              <Grid container item style={{ flex: 1, height: '100%', maxWidth: 100, position: 'relative' }} >
                <Image src={DarkLogo} alt="max" fill style={{ objectFit: 'contain' }} sizes="50vw" />
              </Grid>
            </Link>
          </Grid>
          <Grid container item justifyContent='flex-end' alignItems='center' style={{ flexFlow: 'row' }} >
            <Typography display='inline' variant='b1' textAlign='right' style={{ paddingRight: 8 }} >
              {`Made with`}
              <span style={{ color:'red'}} >
                {` ♥`}
              </span>
            </Typography>
            <Tooltip title='Site code' >
              <IconButton component={Link} href='https://github.com/maxhelsel/facelift-milkbone' target='_blank' rel='noopener' >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Typography component='p' variant='fine' style={{ paddingTop: 4 }} >
          {`All product names, trademarks and registered trademarks are property of their respective owners. Use of these names, trademarks and brands does not imply endorsement or affiliation.`}
        </Typography>
        <Typography component='p' variant='fine' style={{ paddingTop: 4 }} >
          {`Everything on the Site is provided to you “as is” without warranty of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose or non-infringement.`}
        </Typography>
      </FooterBoxStyled>
    </FooterContainerStyled>
  )
};

export default FooterBox;
