import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar/navbar'
import SectionOne from '../Components/SectionOne/sectionone'
import styles from '@/styles/Home.module.css'



export default function Home() {
  return (
   <div className={styles.main}>
      <Navbar />
      <SectionOne />
   </div>
  )
}
