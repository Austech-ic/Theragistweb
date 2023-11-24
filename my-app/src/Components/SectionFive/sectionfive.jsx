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
    const [isDropWorkshop, setDropWorkshop] = useState(false);

    const [isDropBook, setDropBook] = useState(false);
    const [isDropSchedule, setDropSchedule] = useState(false);

    const [isDropSuit, setDropSuit] = useState(false);
    const [isDropRemote, setDropRemote] = useState(false);

    const [isDropProgram, setDropProgram] = useState(false);




    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
        console.log(isDropdownVisible)
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
    const toggleWorkshop = () => {
      setDropWorkshop(!isDropWorkshop)
  }
  const toggleBook = () => {
    setDropBook(!isDropBook)
}
const toggleSchedule = () => {
  setDropSchedule(!isDropSchedule)
}
const toggleSuit = () => {
  setDropSuit(!isDropSuit)
}
const toggleRemote = () => {
  setDropRemote(!isDropRemote)
}
const toggleProgram = () => {
  setDropProgram(!isDropProgram)
}


    return(
        <div className={styles.main}>
             <p className={styles.center}>FAQs</p>


            <div  className={styles.subcont}>
                <div className={styles.cont} >
                   
                    <p className={styles.label}>What if I want more therapy sessions than the one my organization booked for me?</p>
                   
                    <IoIosArrowDown
                    onClick={toggleDropdown}
                      className={`${styles.icon} ${isDropdownVisible ? styles.icon_active  : ''}`}/>

                   
                </div>
                {isDropdownVisible && (
        <p className={styles.text}>
         With Theragist, you are able to book extra sessions independent of your organization .
        </p>
      )}
            </div>

            <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}>What is the mode of communication?</p>
                <IoIosArrowDown
                onClick={toggleInfoDropVisible}
                className={`${styles.icon} ${isDropInfoVisible ? styles.icon_active  : ''}`}/>
                </div>
                {isDropInfoVisible && (
        <p className={styles.text}>
           We have provisions for video calls, audio calls and chats. You get to decide which you want 
        </p>
      )}
                
            </div>

            <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}>What can I expect from my first appointment?</p>
                <IoIosArrowDown
                onClick={toggleTheraphyVisible}
                className={`${styles.icon} ${isDropTheraphyVisible ? styles.icon_active  : ''}`}/>
                </div>
                {isDropTheraphyVisible && (
        <p className={styles.text}>
          In the first appointment, you will undergo a general and specific diagnosis which will dictate the type of therapy/counseling you'll receive for the remaining appointments. You'll then set initial treatment goals with your Counsellor/Therapist. 

        </p>
      )}
                
            </div>


             <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}>Is my information kept confidential?</p>
                <IoIosArrowDown
                onClick={toggleResultVisible}
                className={`${styles.icon} ${isDropResult ? styles.icon_active  : ''}`}/>
                </div>
                {isDropResult && (
        <p className={styles.text}>
         Certainly, in fact, you can remain anonymous if you want to. 
        </p>
      )}
                
            </div>
            <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}>Can I book a session on behalf of someone else?</p>
                <IoIosArrowDown
                onClick={toggleBook}
                className={`${styles.icon} ${isDropBook ? styles.icon_active  : ''}`}/>
                </div>
                {isDropBook && (
        <p className={styles.text}>
           Yes, you can, without consent if they are minors and are your wards or children, but if they are adults, you must have their consent.
        </p>
      )}
                
            </div>

            <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}> Who will be facilitating the workshop?</p>
                <IoIosArrowDown
                onClick={toggleWorkshop}
                className={`${styles.icon} ${isDropWorkshop ? styles.icon_active  : ''}`}/>
                </div>
                {isDropWorkshop && (
        <p className={styles.text}>
           The workshop will be facilitated by seasoned mental health professionals from Theragist. Our team brings expertise in stress management and corporate well-being, ensuring a valuable and impactful experience for participants.

        </p>
      )}
                
            </div>
            <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}> How can my organization schedule a workshop?</p>
                <IoIosArrowDown
                onClick={toggleSchedule}
                className={`${styles.icon} ${isDropSchedule ? styles.icon_active  : ''}`}/>
                </div>
                {isDropSchedule && (
        <p className={styles.text}>
           Scheduling a workshop is easy! Simply contact us through the provided channels on our website, and our team will assist you in choosing a suitable date and format for the Program.
        </p>
      )}
                
            </div>
            <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}>Can the workshop be customized to suit the specific needs of our organization?</p>
                <IoIosArrowDown
                onClick={toggleSuit}
                className={`${styles.icon} ${isDropSuit ? styles.icon_active  : ''}`}/>
                </div>
                {isDropSuit && (
        <p className={styles.text}>
           Absolutely! We understand that each organization is unique. We offer customization options to tailor the workshop content to address the specific challenges and goals of your team.

        </p>
      )}
                
            </div>
            <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}>Are  the workshops suitable for remote teams?</p>
                <IoIosArrowDown
                onClick={toggleRemote}
                className={`${styles.icon} ${isDropRemote ? styles.icon_active  : ''}`}/>
                </div>
                {isDropRemote && (
        <p className={styles.text}>
           Yes, the virtual session option is ideal for remote teams. It provides the same transformative experience, allowing participants to engage in the workshop from the comfort of their own workspace.
        </p>
      )}
                
            </div>
            <div className={styles.subcont}>
                <div className={styles.cont} >
                <p className={styles.label}>How can we measure the impact of mental wellness programs on our organization?</p>
                <IoIosArrowDown
                onClick={toggleProgram}
                className={`${styles.icon} ${isDropProgram ? styles.icon_active  : ''}`}/>
                </div>
                {isDropProgram && (
        <p className={styles.text}>
           We provide post-workshop evaluations and assessments to measure the impact on participants. Additionally, our team is available for follow-up consultations and can assist in analyzing the positive changes within your organization post-program.

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