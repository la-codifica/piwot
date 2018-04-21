import React from 'react';
import './Header.css'

const header = (props) => {
    return (
        <div className="header-container">
            <div className="header-title">PIWOT</div>
            <div className="page-title">{props.pageTitle}</div>
            <div className="header-toolbar">
                <i className="fa fa-cog fa-fw" />
                <i className="fa fa-question fa-fw" />
                <i className="fa fa-sign-out-alt fa-fw" />
            </div>
        </div>
    );
}

export default header;