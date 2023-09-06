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
          <title>{title}</title>
        </Head>
          <Component {...pageProps} />
      </React.Fragment>
    </div>
  )
}
