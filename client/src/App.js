import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Projects from './components/Projects/Projects';
import ProjectDashboard from './containers/Project/ProjectDashboard';
import NewPI from './containers/PI/NewPI/NewPI';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
    state = {
        pageTitle: "Home"
    };

    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Layout>
                        <Switch>
                            <Redirect exact from="/" to="/projects" />
                            <Route exact path="/projects" component={Projects} something="soniye"/>
                            <Route path="/projects/:id" component={ProjectDashboard} />
                            <Route exact path="/new-PI" component={NewPI} />
                        </Switch>
                    </Layout>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
