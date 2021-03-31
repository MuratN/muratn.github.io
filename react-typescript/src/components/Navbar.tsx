import React from 'react';
import { NavLink } from 'react-router-dom';


export const Navbar: React.FunctionComponent = () => (
    <nav className="px1">
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">React + TypeScript</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">Todo list</NavLink></li>
                <li><NavLink to="/about">About as</NavLink></li>
            </ul>
        </div>
    </nav>
)