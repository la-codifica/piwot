import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const header = (props) => {
    return (
        <div className="header-container">
            <Link className="header-title" to="/">PIWOT</Link>
            <div className="page-title">{props.pageTitle}</div>
            <div className="header-toolbar">
                <NavLink to="/settings"><i className="fa fa-cog fa-fw" /></NavLink>
                <NavLink to="/help"><i className="fa fa-question fa-fw" /></NavLink>
            </div>
        </div>
    );
}

export default header;