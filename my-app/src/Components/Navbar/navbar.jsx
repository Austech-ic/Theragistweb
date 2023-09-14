"use client"
import React, { useState } from 'react'
import styles from './navbar.module.css'
import Image from "next/image";
import navlogo from '../../../public/img/navlogo.jpeg'
import blue from '../../../public/img/blue.png'
import navnew from '../../../public/img/navnew.png'

import { IoIosMenu } from 'react-icons/io';
import { RiCalendarEventLine } from 'react-icons/ri';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMobileMenuContent, setShowMobileMenuContent] = useState(false);


  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowMobileMenuContent(!showMobileMenuContent);
  }

  return (
    <section className={styles.container}>
    <div className={styles.subcont}>
      <div className={styles.imgcont}>
    <div className={styles.logocont}>
        <Image src={navnew} alt='navlogo' className={styles.img} />
        {/* <Image src={blue} alt='blue' className={styles.blue} /> */}
        </div>
        <IoIosMenu
          size={50}
          className={`${styles.menu} ${isMenuOpen ? styles.hiddenOnDesktop : ''}`}
          onClick={handleMenuClick}
        />
      </div>
         {/* Mobile Menu Content */}
         {showMobileMenuContent && (
          <div>
            <div className={styles.listcont}>
              <p className={styles.items}>Home</p>
              <p className={styles.items}>About Us</p>
              <p className={styles.items}>Services</p>
              <p className={styles.items}>Contact</p>
              <Link href={`/`} className={styles.link}>
                <button className={styles.buttonone}>
                  Download</button>
              </Link>
            </div>
            
           
          </div>
        )}

      

      {/* Desktop Menu Content (Always Visible) */}
      
      <div className={`${styles.listcont} ${styles.visibleOnDesktop}`}>
      <p className={styles.items}>Home</p>
              <p className={styles.items}>About Us</p>
              <p className={styles.items}>Services</p>
              <p className={styles.items}>Contact</p>
              <Link href={`/`} className={styles.link}>
                <button className={styles.buttonone}>
                 Download</button>
              </Link>
      </div>


    </div>
  </section>
  )
}

export default Navbar