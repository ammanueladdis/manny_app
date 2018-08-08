import React, { Component } from 'react';
import axios from "axios";
import './App.css';

import UserForm from './Components/UserForm';

class App extends Component {
  state = {
    repos: null
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data.public_repos;
  
        /* below line is a shorthand alternative to this.setState({ repos: repos }) - this only works because the property and variable have same name */
        this.setState({ repos })
         
      })
    }
    else return;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">         
          <h1 className="App-title">HTTP Calls in React</h1>
        </header>
        <UserForm getUser={this.getUser} />

        {/* Sneaky ternary code below is alternative to if statement - checks if this.state.repos is true and then if true it displays the first option */} 
        { this.state.repos ? <p>Number of repos: { this.state.repos }</p> : <p>Please enter a username in the form above</p> }
                
      </div>
    );
  }
}

export default App;
