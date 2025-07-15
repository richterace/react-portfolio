import React from 'react'
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
    return <section className={styles.container} id='about'>

        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")}
                alt='About image' className={styles.aboutImage} />


            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")}
                        alt="Cursor Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>Experienced in building responsive web and desktop interfaces using modern frontend technologies.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")}
                        alt="Server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Capable of handling backend tasks and building APIs; currently expanding my knowledge in server-side development.</p>
                    </div>

                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")}
                        alt="UI Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Data Analyst</h3>
                        <p>Passionate about working with data and uncovering insights—believing data is at the core of impactful decisions.</p>
                    </div>

                </li>
            </ul>
        </div>


    </section>
}
