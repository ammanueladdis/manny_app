import React, { Component } from 'react';
import './App.css';
import { Table } from 'material-ui';

// Code playground
const user = {
  firstname: 'Robin',
  lastname: 'Wieruch'
};

const { firstname, lastname } = user
console.log(firstname + ' ' + lastname);




// real deal
const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });  
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value })
  } 

  render() {

    const { searchTerm, list } = this.state;

    const isSearched = searchTerm => item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase());  

    return (
      <div className="App">

        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        />

        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
        

        <form>
          <input 
            type="text" 
            onChange={this.onSearchChange}
          />
        </form>

        {list.filter(isSearched(searchTerm)).map(item =>          
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="buton"
              >
                Dismiss
              </button>
            </span>
          </div>
        )}

        <h1>{this.state.searchTerm}</h1>
      </div>
    );    
  }
}

class Search extends Component {
  render() {
    const { value, onChange } = this.props;    
    return (
      <form>
        <input
          type="text"
          value={value}
          onChange={onChange}
        />
      </form>
     
    );
  }
}

class Table2 extends Component {
  const { list}
  render() {
    return (
      <div>
        
      </div>
    );
  }
}


export default App;
