import React from "react";
import { getImageUrl } from "../../utils";
import { Card, Button, Badge } from 'react-bootstrap';
import "../scss/ProjectCard.scss";

export const ProjectCard = ({ project }) => {
    const { title, imageSrc, description, skills, demo, github, details } = project;

    const generateLinkButtons = () => {
        const links = [
            { url: demo, label: 'Demo' },
            { url: github, label: 'Github' },
            { url: details, label: 'Details', onClick: () => window.open(`/projects/${title}`) }
        ];

        return links.filter(link => link.url).map((link, index) => (
            <Button key={index} className="link" href={link.url} target="_blank" onClick={link.onClick}>
                {link.label}
            </Button>
        ));
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
                    {generateLinkButtons()}
                </div>
            </Card.Body>
        </Card>
    );
};
