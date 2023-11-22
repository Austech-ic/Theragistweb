import React from 'react'
import styles from './mobile.module.css'
import Head from 'next/head'

const mobile = () => {
  return (
    <div className={styles.container}>
    <Head>
      <title>App Coming Soon</title>
    </Head>

    <main className={styles.main}>
      <h1 className={styles.head}>Our Mobile App is Coming Soon!</h1>
      <h3 className={styles.text}>Soon be on AppStore and PlayStore.</h3>
      <p className={styles.text}>Stay tuned for exciting updates.</p>
    </main>
  </div>
  )
}

export default mobile