import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/fontawesome-free'
import './NavMenu.css';

const NavMenu = props => {
    const [openMenu, setOpenMenu] = useState(false)

    const setClassNames = num => {
        const classArr = ['m-item'];
        if (openMenu) classArr.push(`open-${num}`)
        return classArr.join(' ')
    }

    const pushToRoute = route => {
        props.history.push(route)
        setOpenMenu(false)
    }

    return (
        <div className = 'NavMenu'>
            <div className = {'m-item m-logo'}
                onClick = {() => setOpenMenu(!openMenu)}>
                Menu
            </div>
            <div className = {setClassNames(1)}
                onClick = {() => pushToRoute('/')}>
                Home
            </div>
            <div className = {setClassNames(2)}
                onClick = {() => pushToRoute('/about')}>
                About
            </div>
            <div className = {setClassNames(3)}
                onClick = {() => pushToRoute('/projects')}>
                Projects
            </div>
            <div className = {setClassNames(4)}
                onClick = {() => pushToRoute('/contact')}>
                Contact
            </div>
        </div>
    );
}

export default withRouter(NavMenu);