import React, { Component } from 'react';
import AuxTag from '../../../hoc/AuxTag';
import Team from '../../Team/Team';
import * as api from '../../../util/api';
import { Link } from 'react-router-dom';
import './ProjectDashboard.css';

class ProjectDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pi: [{
                id: 2001,
                name: "First PI"
            }, {
                id: 2002,
                name: "Second PI"
            }],
            teams: [{
                id: 1,
                name: "Skills Overflow",
                members: []
            }, {
                id: 2,
                name: "Const Elation",
                members: []
            }],
            project: props.location.state.project
        };

    }

    componentDidMount() {
        this.fetchData();
    }

    componentWillReceiveProps() {
        this.fetchData();
    }

    fetchData = function() {
        this.state.teams.map((team, index) => {
            api.getTeam(team.id).then(data => {
                let teams = [...this.state.teams];
                let team = {...teams[index]};
                team.members = data;
                teams[index] = team;
                this.setState({
                    teams: [
                        ...teams
                    ]
                })
            });
        });
    }

    createPIClickHandler = function() {
        this.props.history.push('/new-PI');
    }

    render() {
        let piList = null;

        piList = this.state.pi.map((pi) => {
            let path = {
                pathname: "/pi/" + pi.id,
                state: {
                    projectId: this.state.project.id,
                    piId: pi.id
                }
            };

            return (
                <li key={pi.id}><Link to={path}>{pi.name}</Link></li>
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