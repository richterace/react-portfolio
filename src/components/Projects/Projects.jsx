import React from 'react';

import styles from "./Projects.module.css";

import projects from '../../data/projects.json'
import { ProjectCard } from './ProjectCard';


export const Projects = () => {
    return (
        <section className={styles.container} id='projects'>
            <h className={styles.title}>Projects</h>
            <div className={styles.projects}>
                {
                    projects.map((project, id) => {
                        return (<ProjectCard key={id} project={project} />)
                    })
                };
            </div>



        </section>
    )
};
