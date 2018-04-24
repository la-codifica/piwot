import React from 'react';
import './Team.css';
import AuxTag from '../../hoc/AuxTag';

const team = (props) => {
    return (
        <AuxTag>
            <h3>{props.team.name}</h3>
            <span>Member listing coming soon!</span>
        </AuxTag>
    );
}

export default team;