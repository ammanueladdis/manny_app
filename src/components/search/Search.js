import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import axios from "axios";
import MenuItem from 'material-ui/MenuItem';

class Search extends Component {

	state = {
		searchTest: '',
		amount: 15,
		apiUrl: 'https://pixabay.com/api',
		apiKey: '9806944-ca6dcf6785ac26d10f7bbb374',
		images: []
	};

	onTextChange = e => {
		this.setState({ [e.target.name]: e.target.value }, ()  => {
			axios
				.get(
					`${this.setState.apiUrl}/?key=${this.state.apiKey}&q=${
						this.state.searchText
					}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
				)
				.then(res => this.setState({ images: res.data.hits }))
				.catch(err => console.log(err));
		});
	};

	render() {
		console.log(this.state)
		return (
			<div>
				<TextField 
						name="searchText"
						value={this.state.searchText}
						onChange={this.onTextChange}
						floatingLabelText="Search for Images"
						fullWidth={true}
				/>
				<br/>
					<SelectField 
						name="amount"
						floatingLabelText="Amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					>
						<MenuItem value={5} primaryText="5" />
						<MenuItem value={10} primaryText="10" />
						<MenuItem value={15} primaryText="15" />
						<MenuItem value={30} primaryText="30" />
						<MenuItem value={50} primaryText="50" />
				</SelectField>
			<br />
			</div>
		)
	}
}


export default Search;