'use strict';

const projects = [
    { id: 1, name: "Avengers", owner: "Nick Fury" },
    { id: 2, name: "Project Docile", owner: "Bruce Banner" },
    { id: 3, name: "Humility Framework", owner: "Tony Stark" },
    { id: 4, name: "Project Save Earth", owner: "Peter Parker" },
];

module.exports = {
    getProjects: function() {
        return projects;
    },

    getProject: function(id) {
        let project = projects.find((project) => project.id === parseInt(id) || project.id === id);
        if (project && project.id == id) {
            return project;
        }
        return {};
    }
}