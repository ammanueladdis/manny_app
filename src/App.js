import React, { Component } from 'react';
import './App.css';


class App extends Component {
	render() {
		return (
			<div className="notificationsFrame">
				<div className="panel">
					<Header />
					<AlertBox>
						<h1>You have pending notifications</h1>
					</AlertBox>
				
				</div>

			</div>
		);
	}
}



class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="fa fa-more"></div>

				<span className="title">Timeline</span>

				<input
					type="text"
					className="searchInput"
					placeholder="Search ..." />

				<div className="fa fa-search searchIcon"></div>				
			</div>
		);
	}
}


 
class AlertBox extends React.Component {
  render () {
    return <div className='alert-box'>
      {this.props.children}
    </div>
  }
}



export default App;




