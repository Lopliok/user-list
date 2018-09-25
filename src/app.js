import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ContentWrapper from './components/contentWrapper';
import InputElements from './components/inputElements';
import Modal from './components/modalBox';
import ResultFilter from './containers/resultFilter';
import UserSearch from './containers/userSearch';
import Header from './header';
import cs from './localize.json';
import { addUser, deleteUser, modifyUser } from './reducers/actions';


class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			modalOpen: false,
			activeEditedUser: cs.user,
			editMode: 0
		}
		this.create = this.create.bind(this)
		this.closeModal = this.closeModal.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleSave = this.handleSave.bind(this)
		this.save = this.save.bind(this)
		this.edit = this.edit.bind(this)
		this.delete = this.delete.bind(this)
		this.modifyUser = this.modifyUser.bind(this)
	}

	create() {
		this.setState({
			modalOpen: true,
			editMode: 0
		})
	}

	handleChange(e) {
		const targetName = e.target.name
		const targetValue = e.target.value

		this.setState((prevState) => {
			return ({
				activeEditedUser: {
					...prevState.activeEditedUser,
					[targetName]: targetValue
				}
			})
		})
	}

	closeModal() {
		this.setState({ modalOpen: false })
	}

	handleSave() {
		const save = this.state.editMode ? this.modifyUser : this.save
		save()
		this.setState({
			activeEditedUser: cs.user,
			modalOpen: false
		})
	}

	edit(userId) {
		this.setState({
			activeEditedUser: { ...this.props.users.find((user) => (userId === user.id) ? user : null) },
			modalOpen: true,
			editMode: 1
		})
	}

	async save() {
		await this.props.addUser({ ...this.state.activeEditedUser });
	}

	async modifyUser() {
		await this.props.modifyUser({ ...this.state.activeEditedUser });
	}

	delete(userId) {
		this.props.deleteUser(userId)
	}

	render() {
		return (
			<div className="App">
				<Header createNew={this.create} >
					<UserSearch />
				</Header>

				<Modal visible={this.state.modalOpen} onClose={this.closeModal} title={cs.text.user[this.state.editMode]}>

					<InputElements inputName="name" type='text' value={this.state.activeEditedUser.name} label='User Name' onChange={this.handleChange} />
					<InputElements inputName="nickname" type='text' value={this.state.activeEditedUser.nickname} label='Nickname' onChange={this.handleChange} />
					<InputElements inputName="sex" type='dropdown' selectedValue={this.state.activeEditedUser.sex} options={cs.text.sexOptions} label='Sex' onChange={this.handleChange} />

					<button className='btn btn-primary btn-sm' onClick={this.handleSave}>Save</button>

				</Modal>
				<ContentWrapper>
					<ResultFilter edit={this.edit} deleteUser={this.delete} />
				</ContentWrapper>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	users: state.users
})

const mapDispatchToProps = dispatch => ({
	addUser: user => dispatch(addUser(user)),
	modifyUser: user => dispatch(modifyUser(user)),
	deleteUser: user => dispatch(deleteUser(user)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
