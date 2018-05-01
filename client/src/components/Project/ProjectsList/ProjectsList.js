import React, { Component } from 'react';
import ProjectLineItem from './ProjectLineItem';
import * as api from '../../../util/api';
import './Project.css';

class ProjectsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    componentWillReceiveProps() {
        this.fetchData();
    }

    fetchData = function() {
        api.getProjects().then(data => {
            this.setState({
                projects: data
            })
        });
    };

    render() {
        return (
            <div className="project-list">
                <div className="project-list-header-row">
                    <div>Name</div>
                    <div>Owner</div>
                </div>
                {this.state.projects.map((project, index) => {
                    return <ProjectLineItem key={project.id} project={project} />
                })}
            </div>
        );
    }
};

export default ProjectsList;