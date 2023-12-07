import React from 'react';
import Head from "next/head";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const title = "Theragist  ";
  if (Component.Container) {
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Component.Container>
          <Component {...pageProps} />
        </Component.Container>

      </>
    );
  }


  return (
    <div>
      <React.Fragment>
        <Head>
        <link rel="icon" sizes="192x192" href="brand/head.jpeg" />
          <link rel="icon" type="image/png" href="brand/head.jpeg" />
          <link rel="icon" sizes="128x128" href="/brand/head.jpeg" />
          <title>{title}</title>
        </Head>
          <Component {...pageProps} />
      </React.Fragment>
    </div>
  )
}
