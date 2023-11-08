import styles from './sectionfour.module.css'
import circle from '../../../public/img/circle.png'
import maskone from '../../../public/img/maskone.png'
import masktwo from '../../../public/img/masktwo.png'
import kiz from '../../../public/img/whiteman.png'
import maskthree from '../../../public/img/maskthree.png'
import Image from 'next/image'


const SectionFour = () => {
    const details = [
        {
            id: 1,
            label: "I was going through a tough time, and finding this counseling platform was a lifesaver. The therapists here are incredibly compassionate and understanding. My counselor, Eniola, provided a safe space for me to share my feelings and worked with me to develop coping strategies. I can't express how grateful I am for this platform and the support it has given me.",
            pic:<Image src={kiz} alt='circle-img' className={styles.circle} />,
            text:"-Kizito"
            
        },
        {
            id: 2,
            label: "As someone who was initially hesitant about seeking counseling, I can confidently say that this platform exceeded my expectations. The process of booking a session with a qualified professional was easy and convenient. My therapist, Dr. Godwin, has been exceptional in guiding me through my struggles and helping me gain a better perspective on life. This platform has been an essential part of my healing journey, and I highly recommend it to anyone seeking support.",
            pic:<Image src={masktwo} alt='circle-img' className={styles.circle} />,
            text:"-Esther"
        },
        {
            id: 3,
            label: "I've struggled with anxiety for years, and this counseling platform has been a game-changer for me. The therapists here are highly skilled and empathetic. My counselor, Rachel, not only listens to my concerns but also provides practical tools to manage my anxiety. The online sessions have been convenient, and I appreciate the flexibility this platform offers. I've seen significant improvements in my mental health, and I owe it to the professionals here.",
            pic:<Image src={maskone} alt='circle-img' className={styles.circle} />,
            text:"-Udo"
        },
        {
            id: 4,
            label: 
            "I've been attending counseling sessions on this platform for some weeks now, and the impact on my life has been tremendous. My therapist, Austin, has a unique way of understanding my challenges and guiding me towards positive change. The platform's user-friendly interface and the availability of different counselors make it easy to find the right fit for your needs. I highly recommend this service to anyone seeking support and growth.",
            pic:<Image src={maskthree} alt='circle-img' className={styles.circle} />,
            text:"-Jane"
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