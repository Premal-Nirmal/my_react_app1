import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    person_arr: [
      {name: "Premal", age: "29"},
      {name: "Shiv", age: "28"},
      {name: "Kajal", age: "23"}
    ]
  }
  render() {
    return (
      <div className="App">
       <h1>Hi, this is react app</h1>
       <p>This is really working</p>
       <button>Change</button>
       <Person name = {this.state.person_arr[0].name} age = {this.state.person_arr[0].age} />
       <Person name = {this.state.person_arr[1].name} age = {this.state.person_arr[1].age} > My Hobbies: Racing </Person>
       <Person name = {this.state.person_arr[2].namee} age = {this.state.person_arr[2].age} />

      </div>
    );

    // return React.createElement('Div', {className: 'App'}, React.createElement('h1', null, "hi I'm a React App!!!!") );
  }
}
 
export default App;
