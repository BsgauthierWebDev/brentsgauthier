import React from 'react';
import ProjectsStore from './ProjectsStore';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {
    return (
        <div id = 'Projects' className = 'Projects'>
            <h3>Portfolio</h3>
            <hr className = 'title'></hr>
            <div className = 'projects__wrapper'>
                {ProjectsStore.map((item, index) => {
                    return (
                        <div className = 'projects__item' key = {index}>
                            <div className = 'projects__pic'>
                                <img src = {Object.values(item.img)} alt = 'logo' />
                            </div>
                            <div className = 'projects__text'>
                                <h2 className = 'projects__title'>{item.name}</h2>
                                <p className = 'projects__summary'>{item.summary}</p>
                                <div className = 'projects__skills'>
                                    <ul>
                                        {item.skills.map((skill, index) => {
                                            return (
                                                <li key = {item + skill + index}>{skill}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className = 'projects__links'>
                                    <a id = {item.name} href = {item.url} rel = 'noreferrer' target = '_blank'><h4>Visit Site</h4></a>
                                    <a href = {item.github} rel = 'noreferrer' target = '_blank'><h4><FontAwesomeIcon icon = {faGithub} />GitHub Repository</h4></a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}