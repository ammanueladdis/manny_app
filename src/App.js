import React, { Component } from 'react';
import axios from "axios";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import MenuItem from'material-ui/MenuItem';

import './App.css';


class App extends Component {

  render() {
    return (      
      <MuiThemeProvider>
        <div> 
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>        
    );  
  }
}

export default App;
