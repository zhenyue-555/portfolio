import React from "react";
import { getImageUrl } from "../../utils";
import {history, skills} from "../../data/moment.json";
import "./Experience.scss";

export const Experience = () => {
    return (
    <section className="experience--container" id="experience">
        <h2 className="experience--title">Experience</h2>
        <div className="experience--content">
            <div className="experience--skills">
                {skills.map((skill, id) => {
                return (
                    <div key={id} className="experience--skill">
                    <div className="skillImageContainer">
                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                <p>{skill.title}</p>
                </div>
                );
            })}</div>
            <ul>
                {
                    history.map((historyItem, id) => {
                        return <li key={id} className="historyItem">
                            <img src={getImageUrl(historyItem.imageSrc)} alt= {`${historyItem.organisation} Logo`} />
                            <div className="historyItemDetails">
                                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>
                                    {historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>
                                    })}
                                </ul>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </section>
    );
};