import React from "react";
import { getImageUrl } from "../../utils";
import { history, skills } from "./Experience.json";
import "./Experience.scss";
// import "../scss/Experience.scss";
import { Container, Row, Col, Image } from 'react-bootstrap';

export const Experience = () => {
    return (
            <Container className="experience--container" id="experience">
                <h2 className="experience--title">Experience</h2>
                <Row>
                    <Col lg={6} xs={12} className="experience--skills">
                        <Row>
                        {skills.map((skill, id) => (
                            <Col xs={4} md={3} lg={6} key={id} className="experience--skill">
                                <div className="skillImageContainer">
                                    <Image className="experience-icon" src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                                </div>
                                <p>{skill.title}</p>
                            </Col>
                        ))}
                        </Row>
                    </Col>
                    <Col lg={6} xs={12}>
                        <ul>
                            {history.map((historyItem, id) => (
                                <li key={id} className="historyItem">
                                    <Image src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
                                    <div className="historyItemDetails">
                                        <h3 className="role">{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                        <p className="date">{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        <ul className="experienceItem">
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
    );
};
