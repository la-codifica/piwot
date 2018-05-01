import React, { Component } from 'react';

class ProjectStore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentWillMount() {
        
    }

    render() {
        return this.props.children;
    }
};

export default ProjectStore;