import React from "react";
import { getImageUrl } from "../../utils";
import { history, skills } from "../../data/moment.json";
import "../scss/Experience.scss";
import { Container, Row, Col, Image } from 'react-bootstrap';

export const Experience = () => {
    return (
        <section className="experience--container" id="experience">
            <Container>
                <h2 className="experience--title">Experience</h2>
                <Row className="experience--content">
                    <Col md={6} className="experience--skills">
                        {skills.map((skill, id) => (
                            <div key={id} className="experience--skill">
                                <div className="skillImageContainer">
                                    <Image src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        ))}
                    </Col>
                    <Col md={6}>
                        <ul>
                            {history.map((historyItem, id) => (
                                <li key={id} className="historyItem">
                                    <Image src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
                                    <div className="historyItemDetails">
                                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        <ul>
                                            {historyItem.experiences.map((experience, id) => (
                                                <li key={id}>{experience}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
