import React from 'react'

import { getImageUrl } from '../../utils'
import styles from './Contacts.module.css'

export const Contacts = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2 >Contact</h2>
                <p >Feel free to reach out</p>

            </div>
            <div >
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <img src={getImageUrl('contact/emailIcon.png')} alt="Email Icon" />
                        <a href="villasace098@gmail.com"> villasace098@gmail.com</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl('contact/linkedinIcon.png')} alt="LinkedIn Icon" />
                        <a href="https://www.linkedin.com/in/richter-ace-villas-091597266/"> linkedin.com/richterace</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl('contact/githubIcon.png')} alt="Github Icon" />
                        <a href="https://github.com/richterace">github.com/richterace</a>
                    </li>
                </ul>
            </div>

        </footer >
    )
}
