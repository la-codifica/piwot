import React from 'react';
import AuxTag from '../../hoc/AuxTag';
import Header from '../Header/Header';
import { withRouter } from 'react-router-dom';

import './Layout.css';

const layout = (props) => {
    let pageTitle = null;
    const pathname = props.location.pathname;
    if (pathname.startsWith('/projects')) {
        if (pathname.startsWith('/projects/project')) {
            pageTitle = props.location.state.project.name;
        } else {
            pageTitle = "All Projects";
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