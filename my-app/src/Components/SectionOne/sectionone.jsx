import Image from 'next/image';
import Male from '../../../public/img/Male.png'
import bar from '../../../public/img/bar.png'
import heart from '../../../public/img/heart.png'
import clock from '../../../public/img/clock.png'
import arrow from '../../../public/img/arrow.png'
import styles from './sectionone.module.css'
import light from '../../../public/img/light.png'
import blue from '../../../public/img/blue.png'
import faint from '../../../public/img/faint.png'


const SectionOne = () => {
    return (
        <div className={styles.main}>
            <Image src={light} alt='light-img' width={350} height={250} className={styles.top_light_image}/>

            <Image src={blue} alt='blue-img' width={350} height={250} className={styles.top_blue_image}/>

            <div className={styles.subcont}>
                <div className={styles.contone}>
                    <p className={styles.textone}>Friendliness and deep connection</p>
                    <p className={styles.textwo}>Unveil you story: </p>
                    <p className={styles.texthree}>Finding Healing and <br /> Connection in safe spaces</p>
                    <button className={styles.button}>Make Appointment</button>
                </div>

                
                <div className={styles.contwo}>
                <Image src={clock} alt='clocke-img' className={styles.clockimg}/>
                    
                    
                        <Image src={Male} alt='male-img' className={styles.newimage}/>
                        <Image src={bar} alt='clocke-img' className={styles.barimg}/>
                       
                   
                  
                    
                 
                </div>
               
            </div>

           
           
            <div className={styles.divcont}>
            <div>
            <Image src={faint} alt='faint-img'  className={styles.faintimage} />
            </div>
                <div className={styles.conts}>
                <Image src={heart} alt='heart-img' width={50} height={50} />
                </div>

                <div className={styles.textcont}>
                    <p>How we elevate <br className={styles.hide} /> mental Health</p>
                </div>

                <div className={styles.textcontwo}>
                    <p>We are revolutionizing mental health treatment options by combining these intimately related spheres</p>
                </div>
                <div className={styles.conts}>
                <Image src={arrow} alt='arrow-img' className={styles.imgnew}  />
                </div>

            </div>
            
           
           
        </div>
    )
}

export default SectionOne;