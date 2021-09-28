import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faNodeJs, faJsSquare, faReact, faHtml5, faCss3Alt} from '@fortawesome/free-brands-svg-icons';
import './About.css';

export default function About() {
    return (
        <div className = 'About'>
            <h3 className = 'title'>About</h3>
            <hr></hr>
            <div className = 'about__wrapper'>
                <div className = 'first__group'>
                    <div className = 'intro'>
                        <p>Hi everyone! My name is Brent, and I'm a software engineer in the Baltimore area.</p>
                        <p>I got my professional start in Operations and Logistics before moving on to the development world. Because of my background, I bring a unique approach to working within teams and solving problems.</p>
                        <p>During my time, I've gone from being a worker bee to a manager and mentor. I believe that the success of the team, and the company, is paramount on teamwork and communication.</p>
                        <p>In my free time I enjoy playing and listening to music, trying not to make the biggest mess possible while working in the kitchen as well as fitness activities.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}