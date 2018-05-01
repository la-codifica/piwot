import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const projectLineItem = (props) => {
    let project = props.project;
    return (
        <div className="project-list-item">
            <Link className="property-container" 
                to={{
                    pathname: "/projects/project",
                    state: {
                        project: project
                    }
            }}>
                <i className="fab fa-css3"></i>
                <span className="property project-name">{project.name}</span>
            </Link>
            <div className="property-container">
                <i className="fa fa-user-circle"></i>
                <span className="property project-owner">{project.owner}</span>
            </div>
        </div>
    );
};

export default projectLineItem;