import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTodo, doneTodo, editTodo, setType } from '../actions/index';

class TodoList extends Component {
	constructor(props){
		super(props)
		this.state = { term: '', isEdit: false, id: 0, type: 'all' };
		this.onEditClick = this.onEditClick.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.onDropDownChange = this.onDropDownChange.bind(this);
	}
	componentDidUpdate(prevProps, prevState) {
		var isChange = false;
		prevProps.todos.map(todo => {
			this.props.todos.map(thisTodo => {
				if(todo.id === thisTodo.id){
					if(todo.done !== thisTodo.done){
						isChange = true;
					}
				}
			})
		})
	    if (prevProps.todos.length !== this.props.todos.length || isChange) {
	        this.props.setType(this.state.type);
	    }
	}
	onInputChange(event){
		this.setState({term: event.target.value});
	}
	onEditClick(id, text){
		var test = text;
		this.setState({id: id, isEdit: !this.state.isEdit}, () => {
			if(!this.state.isEdit)
				this.props.editTodo(id, this.state.term);
				this.setState({term: test});
		});
	}
	onDropDownChange(event){
		this.setState({type: event.target.value}, () => {
			this.props.setType(this.state.type);
		});
	}
	renderTodo(){
		return this.props.todos.map(todo => {
			let isEdit = this.state.isEdit;
			let id = this.state.id;
			let bgColor = todo.done ? '#dff0d8' : '#f7f7f7';
				return (
					<li style={{backgroundColor: bgColor, fontSize:24}} className="list-group-item" key={todo.id} >
						{todo.done ? <i className="fa fa-check" ariahidden="true"></i> : null}
						{isEdit && id == todo.id ? <input
							onChange={this.onInputChange} 
							placeholder={`${todo.text}`}
							value={this.state.term} 
							/> : 
						<label>{todo.text}</label>}
						<div className="pull-xs-right">
						<button className="btn btn-info btn-sm btn-space" title="EDIT" onClick={() => {this.onEditClick(todo.id, todo.text)}} >
							<i className="fa fa-pencil-square-o" ariaHidden="true"></i>
						</button>
						<button className="btn btn-success btn-sm btn-space" title="CHECK" onClick={() => {this.props.doneTodo(todo.id)}} >
							<i className="fa fa-check" ariaHidden="true"></i>
						</button>
						<button className="btn btn-danger btn-sm btn-space" title="DELETE" onClick={() => {this.props.deleteTodo(todo)}} >
							<i className="fa fa-times" ariaHidden="true"></i>
						</button>
						</div>
					</li>
				)
		})
	}
	render(){
		return(
			<div>
				<ul className="nav nav-pills tab-header">
					<li><button className="btn btn-md btn-space btn-fixed" onClick={this.onDropDownChange} value="all">All</button></li>
					<li><button className="btn btn-md btn-space btn-fixed" onClick={this.onDropDownChange} value="undone">Undone</button></li>
					<li><button className="btn btn-md btn-space btn-fixed" onClick={this.onDropDownChange} value="done">Done</button></li>
				</ul>
 
				{/*<form className="input-group">
					<select className="form-control" onChange={this.onDropDownChange} value={this.state.type}>
			            <option value="all">All</option>
			            <option value="undone">Undone</option>
			            <option value="done">Done</option>
		            </select>
				</form>*/}
				<ul className="list-group">
					{this.renderTodo()}
				</ul>
			</div>
		)
	}

}




function mapStateToProps( { todos }){
	return { todos };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ deleteTodo, doneTodo, editTodo, setType }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);