import React from 'react'
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return <section>

        <div>
            <h1>
                Hi, I am Ace!
            </h1>
            <p>
                I am a developer and data analyst, reach out if you want to learn more.
            </p>
            <a href="mailto:villasace098@gmail.com"> Contact Me </a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='Hero image of me' />
    </section>
};

