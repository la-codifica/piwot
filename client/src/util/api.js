// A promise that does login and return the authentication
// headers to be used by subsequent API calls
const loginPromise = fetch('/api/login', {
    body: JSON.stringify({
        loginName: 'admin',
        password: 'admin'
    }),
    method: "POST",
    headers: {
        'content-type': 'application/json'
    }
}).then(response => response.json())
.then(data => {
    var headers = new Headers();
    headers.append('Authorization', 'Bearer ' + data.token);
    return headers;
});

function login() {
    return loginPromise;
}

function getProjects() {
    return login().then(headers => {
        return fetch('/api/projects', {
            method: "GET",
            headers: headers
        }).then(response => response.json());
    });
}

function getProject(projectId) {
    return login().then(headers => {
        return fetch('/api/projects/' + projectId, {
            method: "GET",
            headers: headers
        }).then(response => response.json());
    });
}

function getTeam(teamId) {
    return login().then(headers => {
        return fetch('/api/team/' + teamId, {
            method: "GET",
            headers: headers
        }).then(response => response.json());
    });
}

export {
    getProjects,
    getProject,
    getTeam
};