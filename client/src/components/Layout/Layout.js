import React from 'react';
import AuxTag from '../../hoc/AuxTag';
import Header from '../Header/Header';

import './Layout.css';

const layout = (props) => (
    <AuxTag>
        <Header pageTitle={props.pageTitle} />
        <main className="content">
            {props.children}
        </main>
    </AuxTag>
);

export default layout;