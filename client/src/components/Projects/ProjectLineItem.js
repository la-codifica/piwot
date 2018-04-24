import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projectLineItem = (props) => {
    return (
        <div className="project-list-item">
            <Link className="property-container" to={"/projects/" + props.id}>
                <i className="fab fa-css3"></i>
                <span className="property project-name">{props.name}</span>
            </Link>
            <div className="property-container">
                <i className="fa fa-user-circle"></i>
                <span className="property project-owner">{props.owner}</span>
            </div>
        </div>
    );
};

export default projectLineItem;