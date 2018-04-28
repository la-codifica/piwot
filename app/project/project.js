'use strict';

const projects = [
    { id: 1, name: "Avengers", owner: "Nick Fury" },
    { id: 2, name: "Project Docile", owner: "Bruce Banner" },
    { id: 3, name: "Humility Framework", owner: "Tony Stark" },
    { id: 4, name: "Project Save Earth", owner: "Peter Parker" },
];

var getProjects = function(ctx) {
    ctx.body = projects;
    ctx.status = 200;
    return ctx;
}

var getProject = function(ctx) {
    let id = ctx.params.id;
    let project = projects.find((project) => project.id === parseInt(id) || project.id === id);
    if (project && project.id == id) {
        ctx.body = project;
    }
    ctx.status = 200;
    return ctx;
}

module.exports = {
    getProjects,
    getProject    
}