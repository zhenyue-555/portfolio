import React from "react";
import { getImageUrl } from "../../utils";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({project:{title, imageSrc, description, skills, demo, github, details},}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/projects/${title}`);
    };
    return (
        <div className="projectcard--section" onClick={handleClick}>
            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className="projectcard--image"/>
            <div>
            <h3 className="projectcard--title">{title}</h3>
            <p className="projectcard--description">{description}</p>
            <ul className="skills">
                {skills.map((skill, id) => {
                    return (
                    <li key={id} className="skill">{skill}</li>
                    );
                })}
            </ul>
            <div className="links">
                <a href={demo} className="link">Demo</a>
                <a href={github} className="link">Github</a>
                <a href={details} className="link">Details</a>
            </div>
        </div>
        </div>
    );
};