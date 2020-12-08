import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, this is react app</h1>
       <p>This is really working</p>
       <Person name="Premal" age ="29" />
       <Person name="Shiv" age ="28" />
       <Person name="Kajal" age ="23" />

      </div>
    );

    // return React.createElement('Div', {className: 'App'}, React.createElement('h1', null, "hi I'm a React App!!!!") );
  }
}
 
export default App;
