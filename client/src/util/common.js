
export const getProjectFromPath = (location) => {
    let projects = [
        { id: 1, name: "Avengers", owner: "Nick Fury" },
        { id: 2, name: "Project Docile", owner: "Bruce Banner" },
        { id: 3, name: "Humility Framework", owner: "Tony Stark" },
        { id: 4, name: "Project Save Earth", owner: "Peter Parker" }
    ];
    let projectId = location.pathname.substr(location.pathname.lastIndexOf('/') + 1);

    return projects.find((project) => project.id == projectId);
}