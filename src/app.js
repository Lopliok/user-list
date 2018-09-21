import React, { Component } from 'react';
import './App.css';
import ContentWrapper from './components/contentWrapper'
import GridRow from './components/gridRow';
import Modal from './components/modalBox'
import InputElements from './components/inputElements';
import Header from './header';
import SearchValueContext from './header'
import PropTypes from 'prop-types'

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			users: [
				{ id: 1, name: "Jarda", nickname: "Pepík", sex: "man" },
				{ id: 2, name: "Jarda", nickname: "Pepíkddddddd", sex: "man" },
				{ id: 3, name: "Jarda", nickname: "Pepík", sex: "man" }
			],
			modalOpen: false,
			activeEditedUser: {
				name: "",
				nickname: "",
				sex: "man"
			},
			nextUserId: 4,
			editModes: ['New user', 'Edit User'],
			editMode: 0
		}
		this.openModal = this.openModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.save = this.save.bind(this)
	}

	openModal() {
		this.setState({
			modalOpen: true,
			editMode: 0
		})
	}

	handleChange (e) {
		const attrName = e.target.name
		const attrValue = e.target.value

		this.setState((prevState) => {
			return ({
				activeEditedUser: {
					...prevState.activeEditedUser,
					[attrName]: attrValue
				}
			})
		})
	}

	closeModal() {
		this.setState({ modalOpen: false })
	}

	edit(userId) {
		this.setState((prevState) => {
			const editedUser = {...prevState.users[prevState.users.findIndex((u) => u.id == userId)]}

			return ({
				activeEditedUser: editedUser,
				editMode: 1,
				modalOpen: true
			})
		})
	}

	handleConfirm() {
		switch (this.state.editMode) {
			case 1:
			let prevUsers = [...this.state.users]
			prevUsers[prevUsers.findIndex((u) => u.id == this.state.activeEditedUser.id)] = {...this.state.activeEditedUser}
			this.save(prevUsers, false)
				break;	
			case 2:
			let newUsers = [...this.state.users]
			newUsers.push({ id: this.state.nextUserId, ...this.state.activeEditedUser })
			const userId = this.state.nextUserId + 1
			this.save(newUsers, true)
				break;
		}


	}


	save(users, isNew) {

		this.setState((prevState) => {
			let nextId = isNew ? prevState.nextUserId + 1 : prevState.nextUserId
			return ({
				users: users,
				activeEditedUser: {},
				nextUserId: prevState.nextUserId+1	
			})
		})
		console.log(this.state)
		this.closeModal()
	}

	

	handleDelete(userId) {
		this.setState((prevState) => {
			let prevUsers = [...prevState.users]
			prevUsers.splice(prevUsers.findIndex((u) => u.id == userId), 1)

			return ({
				users: prevUsers
			})

		})
	}

	render() {
		return (
			<div className="App">
				<Header createNew={this.openModal} />

				<Modal visible={this.state.modalOpen} onClose={this.closeModal} title={this.state.editModes[this.state.editMode]}>

					<InputElements inputName="name" type='text' value={this.state.activeEditedUser.name} label='User Name' onChange={this.handleChange} />
					<InputElements inputName="nickname" type='text' value={this.state.activeEditedUser.nickname} label='Nickname' onChange={this.handleChange} />
					<InputElements inputName="sex" type='dropdown' selectedValue={1} options={['man', 'woman']} label='Sex' onChange={this.handleChange} />

					<button className='btn btn-primary btn-sm' onClick={this.save}>Save</button>

				</Modal>
				<ContentWrapper>
					{this.state.users.map((user, idx) =>
						<GridRow column={user} key={idx}
							left={
								<button className='btn btn-info btn-sm' onClick={() => this.edit(user.id)} >Edit</button>
							}
							right={
								<button className='btn btn-danger btn-sm' onClick={() => this.handleDelete(user.id)}>Delete</button>
							} />
					)}
				</ContentWrapper>
			</div>
		);
	}
}

export default App;
