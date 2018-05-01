import React from 'react';
import './Team.css';
import AuxTag from '../../hoc/AuxTag';

const team = (props) => {
    return (
        <AuxTag>
            <h3>{props.team.name}</h3>
            {props.team.members.map((member, index) => (<img key={index} alt={member.name.last + ', ' + member.name.first} src={member.picture.thumbnail} />))}
        </AuxTag>
    );
}

export default team;