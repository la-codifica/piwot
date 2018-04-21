import React from 'react';
import Aux from '../../hoc/Aux';
import Header from '../Header/Header';

import './Layout.css';

const layout = (props) => (
    <Aux>
        <Header pageTitle={props.pageTitle} />
        <main className="content">
            {props.children}
        </main>
    </Aux>
);

export default layout;