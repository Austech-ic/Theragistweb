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



export default function Home() {
  return (
   <div className={styles.main}>
    <div className={styles.cont}>
      <Navbar />
      <SectionOne />
      </div>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
     
   </div>
  )
}
