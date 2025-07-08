import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return <section className={styles.container}>

        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I am Ace!
            </h1>
            <p className={styles.description}>
                I am a developer and data analyst, reach out if you want to learn more.
            </p>
            <a href="mailto:villasace098@gmail.com" className={styles.contactBtn}> Contact Me </a>
        </div>
        <img src={getImageUrl("hero/ImageMe.png")} alt='Hero image of me' className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
};

