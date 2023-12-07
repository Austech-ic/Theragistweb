import React from 'react'
import styles from './workspacecomp.module.css'
import Image from "next/image";
import navnew from '../../../public/img/theranew.jpeg'
import landing from '../../../public/img/landing.png'
import iconone from '../../../public/img/ladyicon.jpeg'
import icontwo from '../../../public/img/stand.jpeg'
import iconthree from '../../../public/img/squat.jpeg'
import iconfour from '../../../public/img/bulb.jpeg'
import message from '../../../public/img/message.png'
import call from '../../../public/img/call.png'
import web from '../../../public/img/web.png'
import pic from '../../../public/img/mark.png'
import { AiOutlineMail } from "react-icons/ai"
import { MdCall } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import Link from 'next/link';

const Workspacecomp = () => {
    const details = [
        {
            id: 1,
            icon: iconone,
            label: "Strategic Stress Identification",
            text: "Pinpoint stressors unique to your workplace environment through personalized assessments. This forms the foundation for targeted stress management strategies."
        },
        {
            id: 2,
            icon: icontwo,
            label: "Expert-Led Workshops",
            text: "Engage in dynamic workshops led by experienced professionals. Benefit from evidence-based techniques and practical tools that address stress at its roots."
        },
        {
            id: 3,
            icon: iconthree,
            label: "Mindfulness Integration",
            text: "Immerse your employees in mindfulness practices proven to reduce stress and increase mental clarity. Learn how to apply these techniques in the fast-paced work setting for lasting impact."
        },
        {
            id: 4,
            icon: iconfour,
            label: "Proactive Coping Strategies",
            text: "Equip your employees with proactive coping mechanisms. From time management skills to effective communication strategies, empower your employees to navigate challenges with confidence."
        }
    ]
    const contact = [
        {
            id: 1,
            image: message,
            info: "a.theragist@gmail.com",
        },
        {
            id: 2,
            image: call,
            info: "+234-812-383-1687",
        },
        {
            id: 3,
            image: web,
            info: "www.theragist.com",
        }
    ]
    const Benefit = [
        {
            id: 1,
            Pic: pic,
            head: "Enhanced Employee Well-being",
            subinfo: "Foster a workplace culture that prioritizes mental health. SMP-100 promotes well-being, contributing to increased job satisfaction and reduced burnout."
        },
        {
            id: 2,
            Pic: pic,
            head: "Optimized Performance",
            subinfo: "Empower your employees to perform at their best by providing them with the tools to manage stress effectively. Boost productivity and efficiency across your organization."
        },
        {
            id: 3,
            Pic: pic,
            head: "Positive Workplace Culture",
            subinfo: "Cultivate a supportive environment where employees feel heard and valued. Strengthen team dynamics and collaboration through stress-aware communication."
        }
    ]


    return (
        <div className={styles.main}>
            <div className={styles.contone}>
                <div className={styles.contfirst}>
                    <div className={styles.logocont}>
                        <Image src={navnew} alt='navlogo' className={styles.img} />
                    </div>
                </div>
                <div className={styles.cont}>
                    <p className={styles.text}>a</p>
                </div>
            </div>
            <div className={styles.contwo}>
                <Image src={landing} alt='landing-img' className={styles.image} />
            </div>
            <div className={styles.conthree}>
                <div className={styles.containerone}>
                    <div className={styles.headcont}>
                        <p className={styles.head}>Program Highlights</p>
                    </div>
                    <div className={styles.innercont}>

                        {details.map((datum) => (
                            <div className={styles.detailscont} key={datum.id}>
                                <div className={styles.imgcont}>
                                    <Image src={datum.icon} alt='icon-img' className={styles.iconimg} />
                                </div>
                                <div className={styles.textcont}>
                                    <p className={styles.textone}>{datum.label}</p>
                                    <p className={styles.textwo}>{datum.text}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className={styles.lastcont}>
                        <div className={styles.headconts}>
                            <p className={styles.headtext}>Contact Us</p>
                        </div>
                        
                        <div className={styles.contactmain}>
                            <Link href="mailto:info@theragist.com"
                            className={styles.link}>
                            <div className={styles.contactcont}>
                                
                                <AiOutlineMail className={styles.icon} />
                                <p className={styles.tetx}>a.theragist@gmail.com</p>
                            </div>
                            </Link>
                            <Link href="tel:+2348123831687"
                            className={styles.link}>
                            <div className={styles.contactcont}>
                                <MdCall className={styles.icon}/>
                                <p className={styles.tetx}>+234-812-383-1687</p>
                            </div>
                            </Link>
                            <Link href="https://www.theragist.com/"
                            className={styles.link}>
                            <div className={styles.contactcont}>
                                <TbWorld className={styles.icon} />
                                <p className={styles.tetx}>www.theragist.com</p>
                            </div>
                            </Link>
                            

                        </div>
                    </div>
                </div>
                <div className={styles.containertwo}>
                    <div className={styles.headcont}>
                        <p className={styles.head}>Key Benefits</p>
                    </div>
                    <div className={styles.innerconts}>
                        {Benefit.map((info) => (
                            <div className={styles.detailscont} key={info.id}>
                                <div className={styles.imgcont}>
                                    <Image src={info.Pic} alt='icon-img' className={styles.iconimg} />
                                </div>
                                <div className={styles.textcont}>
                                    <p className={styles.textone}>{info.head}</p>
                                    <p className={styles.textwo}>{info.subinfo}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.lastconts}>
                        <div className={styles.abtus}>
                            <p className={styles.heads}>About Us</p>
                            <div>
                                <p className={styles.lastext}>In today’s fast-paced work environment, effective stress management is essential for both employee well-being and organizational success. Discover a transformative approach to workplace stress with SMP-100, our comprehensive stress management program designed to empower your team, enhance productivity, and cultivate a resilient workplace culture.</p>
                            </div>
                        </div>
                        <div className={styles.empty}>
                            <p className={styles.text}>a</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workspacecomp