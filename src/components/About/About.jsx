import React from 'react'
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
    return <section className={styles.container}>

        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")}
                alt='About image' className={styles.aboutImg} />


            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")}
                        alt="Cursor Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p> I am somehow a frontend developer.
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")}
                        alt="Server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p> I can handle such thing duh.
                            Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")}
                        alt="UI Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Data Analyst</h3>
                        <p> I specialize in data.
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                    </div>
                </li>
            </ul>
        </div>


    </section>
}
