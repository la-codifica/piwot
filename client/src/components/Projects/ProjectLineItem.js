import React from 'react';
import './Projects.css';

const projectLineItem = (props) => {
    return (
        <div className="project-list-item">
            <div className="property-container">
                <i className="fab fa-css3"></i>
                <span className="property project-name">{props.name}</span>
            </div>
            <div className="property-container">
                <i className="fa fa-user-circle"></i>
                <span className="property project-owner">{props.owner}</span>
            </div>
        </div>
    );
};

export default projectLineItem;