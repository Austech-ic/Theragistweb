// ContactInfo.js
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import styles from './contact.module.css'

const ContactInfo = () => {
  return (
    <div className={styles.main}>
      <p className={styles.center}>Contact Information</p>
      <p className={styles.text}>Address:Mandela House, African University of Science and Technology, Galadimawa Abuja.</p>
      <p className={styles.text}>
        Email: <a className={styles.link} href="mailto:info@theragist.com">info@theragist.com</a>
      </p>
      <p className={styles.text}>Phone: +1 (555) 123-4567</p>
      {/* <p className={styles.text}>
        <FaInstagram color="#e4405f" size="2em" />: <a href="https://instagram.com/theragist?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer">Theragist</a></p> */}
      {/* Add more contact information as needed */}
    </div>
  );
};

export default ContactInfo;
