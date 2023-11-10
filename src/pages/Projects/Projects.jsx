import React from "react";
// import styles from "./Projects.module.css";
import projects from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section className="projects--section" id="projects">
        <h2 className="projects--title">Projects</h2>
        <div className="projects">
            {projects.map((project, id) => {
                    return <ProjectCard project={project} key={id} />;
                })}
        </div>
        </section>
    );
};