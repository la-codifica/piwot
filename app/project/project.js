'use strict';

const projects = [
    { id: 1, name: "Rollbase", owner: "Venkat Ramana Kaza" }
];

var getAll = function(ctx) {
    ctx.body = projects;
    ctx.status = 200;
    return ctx;
}

var get = function(ctx) {
    let id = ctx.params.id;
    let project = projects.find((project) => project.id === parseInt(id) || project.id === id);
    if (project && project.id == id) {
        ctx.body = project;
    }
    ctx.status = 200;
    return ctx;
}

module.exports = {
    getAll,
    get    
}