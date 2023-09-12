import styles from './sectionfour.module.css'
import circle from '../../../public/img/circle.png'
import Image from 'next/image'


const SectionFour = () => {
    const details = [
        {
            id: 1,
            label: "As some who is always been prone to worrying, this app has been a lifesaver",
            pic:<Image src={circle} className={styles.circle} />
            
        },
        {
            id: 2,
            label: "As some who is always been prone to worrying, this app has been a lifesaver",
            pic:<Image src={circle} className={styles.circle} />
        },
        {
            id: 3,
            label: "As some who is always been prone to worrying, this app has been a lifesaver",
            pic:<Image src={circle} className={styles.circle} />
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
                            <p className={styles.center}>
                            <p className={styles.dat}>{datum.pic} </p>{datum.label}</p>
                           
                            </div>
                    ))
                }
              
               

            </div>
            {/* <div className={styles.cont}>
                <div className={styles.contcont}>
                  <p>As some who is always been prone to worrying, this app has been a lifesaver</p>
                  <Image src={circle} className={styles.circle} />
                </div>
                <div className={styles.contcont}>
                  <p>As some who is always been prone to worrying, this app has been a lifesaver</p>
                  <Image src={circle} className={styles.circle} />
                </div>
                <div className={styles.contcont}>
                  <p>As some who is always been prone to worrying, this app has been a lifesaver</p>
                  <Image src={circle} className={styles.circle} />
                </div>
            </div> */}







        </div>

        </div>
    )
}
export default SectionFour;