import React, { Component } from 'react';
import Modal from 'react-modal'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};

const buttonStyle = {
	position: 'absolute',
	right: '10px',
	top: '10px',
	backgroundColor: 'red'
}

const ModalBox = (props) => (

	<Modal
		isOpen={props.visible}
		style={customStyles}
		onRequestClose={props.onClose}
	>
		<button className='btn btn-sm' style={buttonStyle} onClick={props.onClose}>X Esc </button>

		<h2>{props.title}</h2>
		<hr />
		{props.children}
	</Modal>

);

export default ModalBox;

