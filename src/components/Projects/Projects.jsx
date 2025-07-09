import React from 'react';

import styles from "./Projects.module.css";
import { getImageUrl } from '../../utils';

import projects from '../../data/projects.json'
import { ProjectCard } from './ProjectCard';


export const Projects = () => {
    return (
        <section className={styles.container} id='projects'>
            <h>Projects</h>
            <div>
                {
                    projects.map((project, id) => {
                        return
                        <ProjectCard key={id} project={project} />;
                    })
                }
            </div>



        </section>
    )
};
