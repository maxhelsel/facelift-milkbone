import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { noto } from '/theme/StartTheme.js';

export default function Document() {
  return (
    <Html className={noto.className} >
      <Head >
        <link rel="stylesheet" href="https://use.typekit.net/eln4wsg.css" />
      </Head>
      <body className={noto.className} >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
};
