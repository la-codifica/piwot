import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Projects from './components/Projects/Projects';

class App extends Component {
  state = {
    projects: [
      { id:1, name: "Avengers", owner: "Nick Fury" },
      { id:2, name: "Project Docile", owner: "Bruce Banner" },
      { id:3, name: "Humility Framework", owner: "Tony Stark" },
      { id:4, name: "Project Save Earth", owner: "Peter Parker" },
    ]
  };

  render () {
    return (
      <div className='App'>
        <Layout pageTitle="Projects">
          <Projects projects={this.state.projects} />
        </Layout>
      </div>
    )
  }
}

export default App;
