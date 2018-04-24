import React from 'react';
import ProjectLineItem from './ProjectLineItem';
import './Projects.css';

const projects = (props) => {

    let projects = [
        { id: 1, name: "Avengers", owner: "Nick Fury" },
        { id: 2, name: "Project Docile", owner: "Bruce Banner" },
        { id: 3, name: "Humility Framework", owner: "Tony Stark" },
        { id: 4, name: "Project Save Earth", owner: "Peter Parker" },
    ];

    let renderContent = null;

    if (projects && projects.length > 0) {
        renderContent = (
            <div className="project-list">
                <div className="project-list-header-row">
                    <div>Name</div>
                    <div>Owner</div>
                </div>
                {projects.map((project, index) => {
                    return <ProjectLineItem
                        name={project.name}
                        owner={project.owner}
                        key={project.id}
                        id={project.id}
                    />
                })}
            </div>
        );
    } else {
        renderContent = (
            <p>No Projects defined!</p>
        );
    }

    return renderContent;
};

export default projects;