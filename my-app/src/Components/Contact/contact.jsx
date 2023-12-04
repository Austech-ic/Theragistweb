// ContactInfo.js
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import styles from './contact.module.css'

const ContactInfo = () => {
  return (
    <div className={styles.main} id="contact-us">
      <p className={styles.center}>Contact Information</p>
      <div className={styles.cont}>
      <p className={styles.text}>Address:</p>

      <p className={styles.texts}>Mandela House, African University of Science and Technology, Galadimawa Abuja.</p>
        </div>
        <div className={styles.cont}>
        <p className={styles.text}>
        Email:
      </p>
      <p className={styles.texts}>
       <a className={styles.link} href="mailto:info@theragist.com">info@theragist.com</a>
      </p>
        </div>
        <div className={styles.cont}>
        <p className={styles.text}>
       Phone:
      </p>
      {/* <p className={styles.texts}> */}
      <p className={styles.texts}>
      <a href="tel:+2348123831687" className={styles.link}>
      +234-812-383-1687
      </a>
      </p>
      
        </div>
    
     
     
     
    </div>
  );
};

export default ContactInfo;
