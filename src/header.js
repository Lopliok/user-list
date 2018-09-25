import React, { Component } from 'react';
import InputElements from './components/inputElements';

const header = {
	button: {
		left: '10px',
		bottom: '10px',
	}
}

class Header extends Component {

	constructor(props) {
		super(props)

		this.state = {
			search: ""
		}
	}

	handleChange = (e) =>
		this.setState({
			[e.target.name]: e.target.value
		})

	render() {
		return (
			<header className='App-header'>
				<button className='btn btn-outline-info' onClick={this.props.createNew} style={header.button}>Add user</button>
				<div style={{ width: '350px', float: 'right' }}>
					{this.props.children}
				</div>

			</header>
		);
	}
}

export default Header;


