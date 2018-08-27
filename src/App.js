import React, { Component } from 'react';
import './App.css';
import { Table } from 'material-ui';

// hangover from orig app
const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

const DEFAULT_QUERY = 'redux';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;

class App extends Component {

  constructor(props) {
	super(props);

	this.state = {
	  result: null,
	  searchTerm: DEFAULT_QUERY,
	};

	this.setSearchTopStories = this.setSearchTopStories.bind(this);
	this.onSearchChange = this.onSearchChange.bind(this);
	this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
	const isNotId = item => item.objectID !== id;
	const updatedHits = this.state.result.hits.filter(isNotId);
	this.setState({ list: updatedList });
  }

  onSearchChange(event) {
	this.setState({ searchTerm: event.target.value })
  }

  setSearchTopStories(result) {
	this.setState({ result });
  }

  componentDidMount() {
	const { searchTerm } = this.state;

	fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  }

  render() {
	const { searchTerm, result } = this.state;

	if (!result) { return null; }

	return (
      <div className="page">
        <Table
          list={result.hits}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
	);
  }
}

export default App;
