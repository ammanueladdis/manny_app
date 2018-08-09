import React, { Component } from 'react';
import axios from "axios";
import './App.css';

import UserForm from './Components/UserForm';

class App extends Component {
  constructor() {
    super()
    this.state={
      movies:[]
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    var query = this.input.value;
    console.log(query);
  }

  componentDidMount(query){
    var api = 'https://themoviedb.org/3/search/movie?api_key=98e29b7ce43f0e1d5ee589664b968f3e&query='
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <h2 className="col-12 text-center">Search for a Movie</h2>
                <form onSubmit={this.onSubmit} className="col-12">
                  <input className="col-12 form-control" placeholder="Search Movies..."
                  ref = {input => this.input = input}/>
                </form>
            </div>
          </div>        
        </div>
      </div>
    );
  }
}

export default App;
