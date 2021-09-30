import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import './Contact.css';

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alert: null
        }
    }

    sendEmail = (e) => {
        e.preventDefault();
        this.setState({alert: null})
        var templateParams = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        }

        emailjs.send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE, templateParams, process.env.REACT_APP_USER_ID)
            .then(result => {
                console.log(result.text);
                this.setState({alert: `${result.text}: email sent!`})
            })
            .catch(result => {
                this.setState({alert: result.error})
            })
            e.target.reset()
    }

    render() {
        const {alert}  = this.state;
        return (
            <div id = 'Contact' className = 'Contact'>
                <div className = 'group1'>
                    <h2>Contact Me</h2>
                    <div className = 'group'>
                        <div className = 'item'>
                            <p>Please feel free to reach out or follow me. I'm looking forward to hearing from you!</p>
                            <span className = 'page__links'>
                                <a href = 'https://www.linkedin.com/in/brentgauthier/' rel = 'noreferrer' target = '_blank'><FontAwesomeIcon icon = {faLinkedin} /></a> 
                                {"     "}
                                <a href = 'https://github.com/BsgauthierWebDev/' rel = 'noreferrer' target = '_blank'><FontAwesomeIcon icon = {faGithub} /></a>
                            </span>
                            <div className = 'email__icon'>
                                <FontAwesomeIcon icon = {faEnvelope} />brentsgauthier@gmail.com
                            </div>
                            {/* <ul>
                                <li><a href = 'https://www.linkedin.com/in/brentgauthier/' rel = 'noreferrer' target = '_blank'><FontAwesomeIcon icon = {faLinkedin} /></a> {"     "}<a href = 'https://github.com/BsgauthierWebDev/' rel = 'noreferrer' target = '_blank'><FontAwesomeIcon icon = {faGithub} /></a></li>
                                <li><FontAwesomeIcon icon = {faEnvelope} />brentsgauthier@gmail.com</li>
                            </ul> */}
                        </div>
                    </div>
                </div>
                <div className = 'contact__input'>
                    <h4>Send Me a Message</h4>
                    <div role = 'alert' className = 'alert'>
                        {alert && <p>{alert}</p>}
                    </div>
                    <form className = 'contact__form' onSubmit = {this.sendEmail}>
                        <label htmlFor = 'name'>Name: </label>
                        <input type = 'text' name = 'name' placeholder = 'your name here' />
                        <label htmlFor = 'email'>Email: </label>
                        <input type = 'email' placeholder = 'your email here' />
                        <label htmlFor = 'message__input'>Message: </label>
                        <textarea name = 'message' placeholder = 'please add your message here' />
                        <button type = 'submit' value = 'Send'>Send</button>
                    </form>
                </div>
            </div>
        )
    }
}