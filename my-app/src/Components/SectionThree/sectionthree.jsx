import styles from './sectionthree.module.css'
import Image from 'next/image';
import pregy from '../../../public/img/pregy.png'
import female from '../../../public/img/female.png'
import only from '../../../public/img/only.png'
import newimage from '../../../public/img/new.jpeg'
import onee from '../../../public/img/one.jpeg'
import twok from '../../../public/img/twok.jpeg'
import three from '../../../public/img/eight.jpeg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'


const SectionThree = () => {
    return (
        <div className={styles.main}>
            <div className={styles.divcont}>

                <div className={styles.cont}>
                    <div className={styles.contwo}>
                        <p className={styles.label}>Pregnancy and Maternal Mental health</p>
                        <p className={styles.textwotext}>
                            Our skilled counselors are here to guide you
                            through the unique emotional challenges of
                            pregnancy and early motherhood.
                            Prioritizing your well-being, we offer a safe space
                            to discuss concerns, from stress to postpartum
                            adjustment. Your mental wellness during this
                            transformative phase is our priority, and together,
                            we are here to provide the support you deserve.
                        </p>
                        <div className={styles.buttcont}>
                            <button className={styles.button}>Get started</button>
                            <MdOutlineKeyboardArrowRight className={styles.icon} />
                        </div>


                    </div>
                    <div className={styles.contones}>
                        <Image src={pregy} alt='together-img' className={styles.img} />
                    </div>
                </div>
                <div className={styles.conts}>
                    <div className={styles.contwo}>
                        <p className={styles.label}>Workplace Mental Health</p>
                        <p className={styles.textwotext}>
                            Our employee mental health services offer a
                            supportive space for you to navigate life's challenges.
                            Our expert counselors specialize in assisting
                            you through stress, anxiety, and more. With a
                            focus on confidentiality and personalized care,
                            we're here to help you thrive.
                        </p>
                        <div className={styles.buttcont}>
                            <button className={styles.button}>Get started</button>
                            <MdOutlineKeyboardArrowRight className={styles.icon} />
                        </div>


                    </div>
                    <div className={styles.contones}>
                        <Image src={female} alt='together-img' className={styles.img} />
                    </div>
                </div>
            </div>
            <div className={styles.contcont}>
                <div className={styles.lastcont}>
                    <div>
                        <p className={styles.innertext}>2K+</p>
                        <p className={styles.textlast}>Recovered Patients</p>
                    </div>
                    <div>
                        <p className={styles.innertext}>98%</p>
                        <p className={styles.textlast}>Satisfaction Rate</p>
                    </div>
                    <div>
                        <p className={styles.innertext}>105</p>
                        <p className={styles.textlast}>Expert Doctors</p>
                    </div>

                </div>
            </div>

            <div className={styles.headdiv}>
                <h1 className={styles.head}>How it Works</h1>

                <div className={styles.contdiv}>
                    <div className={styles.divone}>

                        <Image src={only} alt='together-img'  className={styles.image} />
                        
                    </div>
                    <div className={styles.divtwo}>
                        <div className={styles.labelcont}>
                            <h3 className={styles.register}>Register.</h3>
                            <p className={styles.light}>Begin your journey to better mental health by creating
                                an account on our platform. It's quick, confidential, and
                                the first step towards finding the support you need.</p>
                        </div>
                        <div className={styles.labelcont}>
                            <h3 className={styles.register}>Tell your story.</h3>
                            <p className={styles.light}>Share your experiences, thoughts, and emotions while
                                theragist pairs you with a qualified therapist who will
                                listen, understand, and guide you through your unique
                                mental health journey.</p>
                        </div>
                        <div className={styles.labelcont}>
                            <h3 className={styles.register}>Receive theraphy.</h3>
                            <p className={styles.light}>Engage in personalized therapy sessions, whether
                                through secure video calls, messaging, or in-person
                                visits, designed to address your specific needs and goals.</p>

                        </div>
                        <div className={styles.labelcont}>
                            <h3 className={styles.register}>Recover.</h3>
                            <p className={styles.light}>With the guidance of your therapist and the support of
                                our platform, take positive steps towards healing and
                                recovery, and begin to live a happier, healthier life.</p>
                        </div>

                    </div>
                </div>
            </div>







        </div>
    )
}
export default SectionThree;