import React, { Component } from 'react';
import InputElements from './components/inputElements';

const header = {
	button: {
		left: '10px',
		bottom: '10px',
	}
}

const SearchValueContext = React.createContext('');

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
					<SearchValueContext.Provider value="dark">
						<InputElements name='search' type='text' label='search' onChange={this.handleChange} />
					</SearchValueContext.Provider>
				</div>

			</header>
		);
	}
}

export default Header;


