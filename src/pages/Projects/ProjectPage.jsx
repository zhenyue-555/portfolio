import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "./Projects.json";
import { getImageUrl } from "../../utils";
import "./ProjectPage.scss";
// import "../scss/ProjectPage.scss";

const ProjectPage = () => {
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);
    const project = projects.find(p => {
        return p.title === decodedTitle;
    });

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-page">
            <h1>{project.title}</h1>
            <img src={getImageUrl(project.imageSrc)} alt={`Image of ${project.title}`} />
            <p>{project.description}</p>
            <h3>Skills Used</h3>
            <ul>
                {project.skills.map((skill, id) => <li key={id}>{skill}</li>)}
            </ul>
        </div>
    );
};

export default ProjectPage;
