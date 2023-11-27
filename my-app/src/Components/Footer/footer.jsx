import styles from './footer.module.css'
import Image from 'next/image'
import footerlogo from '../../../public/img/footerlogo.png'
import { FaFacebookF, FaGooglePlusG,FaYoutube } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import {IoIosArrowForward} from 'react-icons/io'
import { AiOutlineGooglePlus } from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'
import Link from 'next/link'



const Footer = () => {
    const details = [
        {
            id: 1,
            icon: <a href="https://instagram.com/theragist?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer"><BsInstagram className={styles.icon} /></a>,
          },
          {
            id: 2,
            icon: <a href="https://www.linkedin.com/in/eniola-oni-8ba018180?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><GrLinkedinOption className={styles.icon} /></a>,
          },
          {
            id: 3,
            icon: <a href="https://youtube.com/@theragist?si=OClCj1dGveog7Ci7" target="_blank" rel="noopener noreferrer"><FaYoutube className={styles.icon} /></a>,
          },
        ];
  
    const legal = [
        {
            id:1,
            text:"Terms",
             icons: <IoIosArrowForward className={styles.iconew} />
        },
        {
            id:2,
            text:"Privacy",
             icons: <IoIosArrowForward className={styles.iconew} />
        },
        {
            id:3,
            text:"Settings",
             icons: <IoIosArrowForward className={styles.iconew} />
        }
    ]
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.cont}>
                    <div className={styles.divone}>
                        <Image src={footerlogo} alt='footer-img' className={styles.footer} />
                        <div className={styles.abtcont}>
                            <p className={styles.texts}>Theragist is a platform platform
                                which breaks barriers to accessing
                                professional mental wellness support
                                by seamlessly integrating it into your
                                organizational workflow.</p>
                                {/* <p>hllo woelf</p> */}
                        </div>

                    </div>
                    <div className={styles.divtwo}>
                        <p className={styles.label}>Quick Links</p>
                        <div className={styles.abtcont}>

                             <Link href="#mission" className={styles.link}>
                              <div  className={styles.conticon}>
                              <IoIosArrowForward className={styles.iconew} />
                                <p className={styles.text}>About us</p>
                                </div>
                                </Link>

                                <Link href="#mission" className={styles.link}>
                              <div  className={styles.conticon}>
                              <IoIosArrowForward className={styles.iconew} />
                                <p className={styles.text}>Our Mission</p>
                                </div>
                                </Link>

                                <Link href="#services" className={styles.link}>
                              <div  className={styles.conticon}>
                              <IoIosArrowForward className={styles.iconew} />
                                <p className={styles.text}>Our Services</p>
                                </div>
                                </Link>

                                <Link href="#" className={styles.link}>
                              <div  className={styles.conticon}>
                              <IoIosArrowForward className={styles.iconew} />
                                <p className={styles.text}>FAQ</p>
                                </div>
                                </Link>
                            
                          
                          
                        </div>
                    </div>
                    <div className={styles.divthree}>
                        <p className={styles.label}>Legal</p>
                        <div className={styles.abtcont}>
                        {
                                legal.map((content) => (
                                    <div key={content.id} className={styles.conticon}>
                                 <p>{content.icons}</p>
                                <p className={styles.text}>{content.text}</p>
                                </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={styles.divfour}>
                        <p className={styles.label}>Contact</p>
                        <div className={styles.abtcont}>
                        <Link href="#services" className={styles.link}>
                              <div  className={styles.conticon}>
                              <IoIosArrowForward className={styles.iconew} />
                                <p className={styles.text}>Our Services</p>
                                </div>
                                </Link>

                            
                        </div>
                    </div>
                </div>
                <div className={styles.subcont}>
                    {
                        details.map((datum) => (
                            <div key={datum.id}
                                className={styles.white}>
                                <p>{datum.icon}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className={styles.linecont}>
                <hr className={styles.line} />
            </div>
            <div className={styles.lastcont}>
                <p className={styles.lasttxt}>Copyright © 2023 By Theragist. All Rights Reserved</p>
            </div>



        </div>
    )
}


export default Footer;