import { IoIosArrowDown } from 'react-icons/io';
import React, { useState } from 'react';
import Image from 'next/image'
import panel from '../../../public/img/panel.png'
import mobile from '../../../public/img/mobile.png'
import apple from '../../../public/img/apple.png'
import google from '../../../public/img/google.png'
import styles from './sectionfive.module.css'


const SectionFive = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isDropInfoVisible, setDropInfoVisible] = useState(false);

    const [isDropTheraphyVisible, setDropTheraphyVisible] = useState(false);
    const [isDropResult, setDropResult] = useState(false);

    const [isDropOnlineVisible, setDropOnlineVisible] = useState(false);




    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
      };

      const toggleInfoDropVisible  = () => {
        setDropInfoVisible(!isDropInfoVisible)
      }

      const toggleTheraphyVisible = () => {
        setDropTheraphyVisible(!isDropTheraphyVisible)
      }

      const toggleResultVisible = () => {
        setDropResult(!isDropResult)
      }
    const toggleOnlineVisible = () => {
        setDropOnlineVisible(!isDropOnlineVisible)
    }



    return(
        <div className={styles.main}>
             <p className={styles.center}>FAQs</p>


            <div  className={styles.subcont}>
                <div className={styles.cont} >
                   
                    <p className={styles.label}>How do I choose the right therapist for me?</p>
                    <IoIosArrowDown
                    onClick={toggleDropdown}
                      className={styles.icon}/>

                   
                </div>
                {isDropdownVisible && (
        <p className={styles.text}>
          We understand the importance of finding the right fit. Our platform allows you to share your story which enables our algorithms to assign you to find a therapist who aligns with your needs and preferences.
        </p>
      )}
            </div>

            <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}>Is my information kept confidential?</p>
                <IoIosArrowDown
                onClick={toggleInfoDropVisible}
                      className={styles.icon}
                      />
                </div>
                {isDropInfoVisible && (
        <p className={styles.text}>
          hello
        </p>
      )}
                
            </div>

            <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}>What if I cannot afford therapy?</p>
                <IoIosArrowDown
                onClick={toggleTheraphyVisible}
                      className={styles.icon}
                      />
                </div>
                {isDropTheraphyVisible && (
        <p className={styles.text}>
          hello
        </p>
      )}
                
            </div>


             <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}>How long will it take to see results in therapy?</p>
                <IoIosArrowDown
                onClick={toggleResultVisible}
                      className={styles.icon}
                      />
                </div>
                {isDropResult && (
        <p className={styles.text}>
          Result
        </p>
      )}
                
            </div>
            <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}>Is online therapy as effective as in-person therapy?</p>
                <IoIosArrowDown
                onClick={toggleOnlineVisible}
                      className={styles.icon}
                      />
                </div>
                {isDropOnlineVisible && (
        <p className={styles.text}>
          Online
        </p>
      )}
                
            </div>


            <div className={styles.divcont}>
                <p className={styles.textone}>Join over 75+ companies already using Theragist </p>
            </div>

            <div className={styles.imgcont}>
               <Image src={panel} alt='panel-img' className={styles.panel}/>
            </div>

            <div className={styles.phonecont}>
                
                <Image src={mobile} alt='panel-img' className={styles.phone}/>
            </div>

            <div className={styles.applecont}>
                <div className={styles.contapple}>
                <Image src={google} alt='google-img' className={styles.google} />
                </div>
                <div className={styles.contgoogle}>
                <Image src={apple} alt='apple-img' className={styles.apple}  />
                </div>

            </div>







        </div>
    )
}


export default SectionFive;