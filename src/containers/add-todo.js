import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, setType } from '../actions/index';

class AddTodo extends Component{
	constructor(props){
		super(props)
		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(event){
		this.setState({term: event.target.value});
	}
	onFormSubmit(event){
		event.preventDefault();
		if(this.state.term != ''){
			this.props.addTodo(this.state.term);
			this.setState({ term: '' });
		}
		
	}
	onClearDone(){
		this.props.clearDone();
	}
	render(){
		return(
			<div className="tab-header">
				<form onSubmit={this.onFormSubmit} className="input-group">
					<input 
						placeholder="Add To List"
						className="form-control"
						value={this.state.term}
						onChange={this.onInputChange}
					/>
					<span className="input-group-btn">
						<button type="submit" className="btn btn-info">ADD</button>
					</span>
				</form>
            </div>
		)
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ addTodo, setType }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTodo);
