import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearDone } from '../actions/index';

class Header extends Component {
	constructor(props){
		super(props)
		this.onClearDone = this.onClearDone.bind(this);
	}
	onClearDone(){
		this.props.clearDone();
	}
	render(){
		return (
			<div>
				<nav className="navbar navbar-fixed-top todo-header">
				  		<h2 className="container text-xs-center">TO DO
						<button onClick={this.onClearDone} className="pull-xs-right btn btn-primary">CLEAR DONE</button>
				  		</h2>
				</nav>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ clearDone }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);