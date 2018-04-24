import React from 'react';
import AuxTag from '../../hoc/AuxTag';
import Header from '../Header/Header';
import { withRouter } from 'react-router-dom';

import './Layout.css';

const layout = (props) => {
    let pageTitle = null;
    const pathname = props.location.pathname;
    if (pathname.startsWith('/projects')) {
        if (pathname.startsWith('/projects/')) {
            // fetch project name from datastore based on id
            let projects = [
                { id: 1, name: "Avengers", owner: "Nick Fury" },
                { id: 2, name: "Project Docile", owner: "Bruce Banner" },
                { id: 3, name: "Humility Framework", owner: "Tony Stark" },
                { id: 4, name: "Project Save Earth", owner: "Peter Parker" }
            ];
            let projectId = pathname.substr(pathname.lastIndexOf('/') + 1);

            pageTitle = projects.find((project) => project.id == projectId).name;
        } else {
            pageTitle = "Projects";
        }
    } else if (pathname.startsWith('/new-PI')) {
        pageTitle = "Create New Program Increment";
    }

    return (
        <AuxTag>
            <Header pageTitle={pageTitle} />
            <main className="content">
                {props.children}
            </main>
        </AuxTag>
    )
};

export default withRouter(layout);