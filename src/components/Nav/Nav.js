import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/react-fontawesome';
import './Nav.css';

export default class Nav extends Component {
    handleNav() {
        let x = document.getElementById('menu');
        if (x.className === 'menu') {
            x.className += 'responsive';
        } else {
            x.className = 'menu;'
        }
    }

    render() {
        return (
            <div className = 'Nav'>
                <Link to = '/'>Home | </Link>
                <Link to = '/about'>About</Link>
            </div>
        )
    }
}