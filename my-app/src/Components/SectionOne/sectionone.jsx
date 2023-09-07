import Image from 'next/image';
import Male from '../../../public/img/Male.png'
import bar from '../../../public/img/bar.png'
import heart from '../../../public/img/heart.png'
import arrow from '../../../public/img/arrowcolor.jpeg'
import styles from './sectionone.module.css'

const SectionOne = () => {
    return (
        <div className={styles.main}>
            <div className={styles.subcont}>
                <div className={styles.contone}>
                    <p className={styles.textone}>Friendliness and deep connection</p>
                    <p className={styles.textwo}>Unveil you story: </p>
                    <p className={styles.texthree}>Finding Healing and <br /> Connection in safe spaces</p>
                    <button className={styles.button}>Make Appointment</button>
                </div>
                <div className={styles.contwo}>
                  
                    <div className={styles.imgcont}>
                    <Image src={Male} alt='male-img' className={styles.img}/>
                    </div>
                 
                </div>
            </div>
            <div className={styles.divcont}>

                <div className={styles.conts}>
                <Image src={heart} alt='heart-img' className={styles.imgnew} width={50} height={50} />
                </div>

                <div className={styles.textcont}>
                    <p>How we elevate <br className={styles.hide} /> mental Health</p>
                </div>

                <div className={styles.textcontwo}>
                    <p>We are revolutionizing mental health treatment options by combining these intimately related spheres</p>
                </div>

                <div className={styles.cont}>
                <Image src={arrow} alt='arrow-img' width={50} height={50} className={styles.arrow} />
                </div>
               
              

            </div>
        </div>
    )
}

export default SectionOne;