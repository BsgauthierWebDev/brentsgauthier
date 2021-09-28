import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWindowClose } from'@fortawesome/free-solid-svg-icons';
import './Nav.css';

export default class Nav extends Component {

    handleNav() {
        let x = document.getElementById('menu');
        if (x.className === 'menu') {
            x.className += 'responsive';
        } else {
            x.className = 'menu';
        }
    }

    render() {
        return (
            <div className = 'header'>
                <div className = 'dropdown'>
                    <Link to = '/'>Home | </Link>
                    <NavLink activeClassName = 'active' to = '/about'>About</NavLink>
                    {/* <div className = 'icon'>
                        {!document.getElementsByClassName('menu')
                            ? <button  id='menu-button' onClick={e => this.handleNav()}><FontAwesomeIcon icon={faWindowClose}/>{' '}</button>
                            : <button  id='menu-button' onClick={e => this.handleNav()}><FontAwesomeIcon icon={faBars}/>{' '}</button>
                        }
                    </div> */}
                </div>
            </div>
        )
    }

    // render() {
    //     return (
    //         <div className = 'header'>
    //             <div className = 'dropdown'>
    //                 <button className = 'link' data-dropdown-button>
    //                     Menu
    //                 </button>
    //                 <div className = 'dropdown-menu'>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
}