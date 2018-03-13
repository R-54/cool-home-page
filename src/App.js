import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Title from './components/Title';
import Projects from './components/Projects';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ivan',
      lastName: 'Rodriguez',
      degree: 'Computer Scientist',
      projects: [{name: 'Project 1'}, {name: 'Project 2'}, {name: 'Project 3'}],
    };
  }
  render() {
    return (
      <div>
        <NavBar />
        <Title
          name={this.state.name}
          lastName={this.state.lastName}
          degree={this.state.degree}
        />
        <Projects
        projects={this.state.projects}
        />
      </div>
    );
  }
}

export default App;
