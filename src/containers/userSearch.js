import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, activeSearch, deactiveSearch } from '../reducers/actions';
import InputElements from '../components/inputElements';

class UserSearch extends Component {

	handleChange = (e) => {
		e.target.value !== '' ? this.props.activeSearch(e.target.value) : this.props.deactiveSearch()
	}

	render() {
		return (
			<div>
				<InputElements name='search' type='text' label='search' onChange={this.handleChange} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	users: state.users
})

const mapDispatchToProps = dispatch => ({
	addUser: user => dispatch(addUser(user)),
	activeSearch: phrase => dispatch(activeSearch(phrase)),
	deactiveSearch: () => dispatch(deactiveSearch())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserSearch)
