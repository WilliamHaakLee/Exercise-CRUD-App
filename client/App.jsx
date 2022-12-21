import React, { Component } from 'react';
import ExerciseContainer from './containers/ExerciseContainer.jsx';

class App extends Component {
    render() {
      return (
        <div>
          <h1>Fitness Tracker From React!!</h1>
          <ExerciseContainer/>
        </div>
      )
    }
  }
  

export default App;