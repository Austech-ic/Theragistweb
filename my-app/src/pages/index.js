import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar/navbar'
import SectionOne from '../Components/SectionOne/sectionone'
import styles from '@/styles/Home.module.css'
import SectionTwo from '@/Components/SectionTwo/sectiontwo'
import SectionThree from '@/Components/SectionThree/sectionthree'
import SectionFour from '@/Components/SectionFour/sectionfour'
import SectionFive from '@/Components/SectionFive/sectionfive'
import Footer from '@/Components/Footer/footer'
import Loading from '@/Components/Loading/loading'


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Your async logic here
      // For example, you can use setTimeout to simulate loading for 2 seconds
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return (
    <div className={styles.main}>
    {loading ? (
      <Loading />
    ) : (
      <div className={styles.cont}>
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <Footer />
      </div>
    )}
  </div>
  )
}
