import React from "react";
import { getImageUrl } from "../../utils";
import { useNavigate } from "react-router-dom";
import { Card, Button, Badge } from 'react-bootstrap';
import "../scss/ProjectCard.scss";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, github, details } }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/projects/${title}`);
    };

    return (
        <Card className="projectcard--section">
            <Card.Img variant="top" src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className="projectcard--image" />
            <Card.Body>
                <Card.Title className="projectcard--title">{title}</Card.Title>
                <Card.Text className="projectcard--description">{description}</Card.Text>
                <div className="skills">
                    {skills.map((skill, id) => (
                        <Badge bg="primary" key={id} className="skill">{skill}</Badge>
                    ))}
                </div>
                <div className="links">
                    <Button className="link" href={demo}>Demo</Button>
                    <Button className="link" href={github}>Github</Button>
                    <Button className="link" href={details} onClick={handleClick}>Details</Button>
                </div>
            </Card.Body>
        </Card>
    );
};
