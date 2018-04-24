import React, { Component } from 'react';
import { getProjectFromPath } from '../../util/common.js';
import AuxTag from '../../hoc/AuxTag';
import { Link } from 'react-router-dom';
import Team from '../../components/Team/Team';
import './ProjectDashboard.css';

class ProjectDashboard extends Component {
    // Fetch relevant data based on the project selected
    state = {
        pi: [{
            id: 2001,
            name: "First PI"
        }, {
            id: 2002,
            name: "Second PI"
        }],
        teams: [{
            id: 3001,
            name: "Skills Overflow"
        }, {
            id: 3002,
            name: "Const Elation"
        }],
        project: getProjectFromPath(this.props.location)
    };

    createPIClickHandler = () => {
        this.props.history.push('/new-PI');
    }

    render() {
        let piList = null;

        piList = this.state.pi.map((pi) => {
            return (
                <li key={pi.id}><Link to={"/pi/" + pi.id}>{pi.name}</Link></li>
            );
        });
        
        return (
            <AuxTag>
                <div className="pi-container">
                    <div className="pi-header-bar">
                        <h2>Program Increments</h2>
                        <button name="createPI" onClick={this.createPIClickHandler}>Create PI</button>
                    </div>
                    <ul>
                        {piList}
                    </ul>
                </div>
                <div className="teams-container">
                    <h2>Teams</h2>
                    {this.state.teams.map((team) => <Team key={team.id} team={team} />)}
                </div>
            </AuxTag>
        );
    }
}

export default ProjectDashboard;