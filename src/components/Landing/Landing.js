import React from 'react';
import './Landing.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

export default function Landing() {
    return (
        <div className = 'Landing'>
            <div className = 'intro'>
                <h1>Brent Gauthier</h1>
                <hr></hr>
                <h3>Full-Stack Web Developer & Software Engineer</h3>
                <hr></hr>
                <h4>Hello, my name is Brent Gauthier, and I'm a software engineer in the Baltimore area.</h4>
                <h4>I'm excited to help build a better world with technology.</h4>
            </div>
            <div className = 'contact__links'>
                <div className = 'contact__links__linkedin'>
                    <a href = 'https://www.linkedin.com/in/brentgauthier/' rel = 'noreferrer' target = '_blank'><FontAwesomeIcon icon = {faLinkedin} /></a>
                </div>
                <div className = 'contact__links__github'>
                    <a href = 'https://github.com/BsgauthierWebDev' rel = 'noreferrer' target = '_blank'><FontAwesomeIcon icon = {faGithub} /></a>
                </div>
            </div>
        </div>
    )
}