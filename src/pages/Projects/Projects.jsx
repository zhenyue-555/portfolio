import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { projects } from "./Projects.json";
import { ProjectCard } from "./ProjectCard";
import "./Projects.scss";
// import "../scss/Projects.scss";

export const Projects = () => {
    return (
            <Container className="projects--section" id="projects">
                <h2 className="projects--title">Projects</h2>
                <Row className="projects">
                    {projects.map((project, id) => (
                        <Col xs={12} lg={4} key={id}>
                            <ProjectCard project={project} />
                        </Col>
                    ))}
                </Row>
            </Container>
    );
};
