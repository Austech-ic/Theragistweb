import styles from './sectionfour.module.css'
import circle from '../../../public/img/circle.png'
import maskone from '../../../public/img/maskone.png'
import masktwo from '../../../public/img/masktwo.png'
import maskthree from '../../../public/img/maskthree.png'
import Image from 'next/image'


const SectionFour = () => {
    const details = [
        {
            id: 1,
            label: "As some who is always been prone to worrying, this app has been a lifesaver",
            pic:<Image src={maskone} alt='circle-img' className={styles.circle} />,
            text:"-Michael"
            
        },
        {
            id: 2,
            label: "As some who is always been prone to worrying, this app has been a lifesaver",
            pic:<Image src={masktwo} alt='circle-img' className={styles.circle} />,
            text:"-Joyce"
        },
        {
            id: 3,
            label: "As some who is always been prone to worrying, this app has been a lifesaver",
            pic:<Image src={maskthree} alt='circle-img' className={styles.circle} />,
            text:"-Leeah"
        },
    ]




    return (
        <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.submain}>
                <p className={styles.head}>TESTIMONIALS</p>
                <p className={styles.bold}>Hear from our users</p>
                <p className={styles.text}>Discover the experiences and feedback from our valued users. <br />
                    But dont just take it from them... Try our app yourself</p>
            </div>

            <div className={styles.cont}>
           
                {
                    details.map((datum) => (
                        <div key={datum.id}  className={styles.contcont}>
                            <p className={styles.center}>{datum.label} </p>
                            <p className={styles.dat}>{datum.pic}</p>
                            <p className={styles.textnew}>{datum.text}</p>
                           
                            </div>
                    ))
                }

            </div>
         







        </div>

        </div>
    )
}
export default SectionFour;