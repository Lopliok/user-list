import React, { Component } from 'react';
import Modal from 'react-modal'
import PropTypes from 'prop-types'

const InputElements = (props) => {

	if (props.type == 'dropdown') {
		return (
			<div className="input-group input-group-sm mb-3">
			<div className="input-group-prepend">
			  <label className="input-group-text" htmlFor="inputGroupSelect01">{props.label}</label>
			</div>
				<select className="custom-select custom-select-sm mb-3" name={props.inputName} onChange={props.onChange} id="inputGroupSelect01">
					{props.options.map((option, idx) =>
						<option key={idx}>{option}</option>
					)}
				</select>
			</div>
		)
	} else {
		return (
			<div className="input-group input-group-sm mb-3">
				<div className="input-group-prepend">
					<span className="input-group-text" id="inputGroup-sizing-sm">{props.label}</span>
				</div>
				<input type="text" name={props.inputName} className="form-control" aria-label="Sizing example input" value={props.value} onChange={props.onChange} aria-describedby="inputGroup-sizing-sm" />
			</div>
		)
	}
};

export default InputElements;


