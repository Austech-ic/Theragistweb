import Image from 'next/image';
import Together from '../../../public/img/toget.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import styles from './sectiontwo.module.css'

const SectionTwo = () => {
    return (
        <div>
            <div className={styles.submain}>
                <p className={styles.text}>We are on a mission</p>
                <div className={styles.cont}>
                    <div className={styles.contone}></div>
                    <div className={styles.contwo}>
                        <p className={styles.textwo}>Our platform aims to promote individual
                            and organizational productivity by promoting
                            mental wellness and providing professional
                            counseling services in your organization. </p>
                    </div>
                </div>
            </div>
            <div className={styles.divcont}>
                <div>
                    <p className={styles.texts}>Our Counsellors can help you </p>
                    <p className={styles.textwos}>Open your possibilities to the world and get rid of your inner limitations</p>
                </div>

                <div className={styles.cont}>
                    <div className={styles.contwo}>
                        <p className={styles.label}>Adolescent mental Health</p>
                        <p className={styles.textwotext}>
                            Our expert counselors specialize in guiding young
                            individuals through life's challenges, providing a safe
                            and confidential space for open conversations.
                            Our goal is to empower adolescents with effective
                            coping strategies, emotional resilience, and a deeper understanding of their emotions.  </p>
                            <div className={styles.buttcont}>
                            <button className={styles.button}>Get started</button>
                            <MdOutlineKeyboardArrowRight className={styles.icon}/>
                            </div> 
                           
                            
                    </div>
                    <div className={styles.contones}>
                        <Image src={Together} alt='together-img' className={styles.img} />
                    </div>
                </div>
                <div className={styles.conts}>
                    <div className={styles.contwo}>
                        <p className={styles.label}>Adolescent mental Health</p>
                        <p className={styles.textwotext}>
                            Our expert counselors specialize in guiding young
                            individuals through life's challenges, providing a safe
                            and confidential space for open conversations.
                            Our goal is to empower adolescents with effective
                            coping strategies, emotional resilience, and a deeper understanding of their emotions.  </p>
                            <div className={styles.buttcont}>
                            <button className={styles.button}>Get started</button>
                            <MdOutlineKeyboardArrowRight className={styles.icon}/>
                            </div> 
                           
                            
                    </div>
                    <div className={styles.contones}>
                        <Image src={Together} alt='together-img' className={styles.img} />
                    </div>
                </div>
            </div>

            


        </div>
    )
}

export default SectionTwo;