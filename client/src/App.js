import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import ProjectsList from './components/Project/ProjectsList/ProjectsList';
import ProjectDashboard from './components/Project/ProjectDashboard/ProjectDashboard';
import PI from './containers/PI/PI';
import NewPI from './containers/PI/NewPI/NewPI';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageTitle: "Home"
        };
    }

    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Layout>
                        <Switch>
                            {/* Default to projects list page */}
                            <Redirect exact from="/" to="/projects" />

                            {/* Shows list of projects and ability to create new project */}
                            <Route exact path="/projects" component={ProjectsList} />
                            
                            {/* Opens the dashboard for a single project */}
                            <Route path="/projects/project" component={ProjectDashboard} />

                            {/* Default to projects list page */}
                            <Route path="/pi/:id" component={PI} />

                            {/* Default to projects list page */}
                            <Route exact path="/new-PI" component={NewPI} />
                        </Switch>
                    </Layout>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
