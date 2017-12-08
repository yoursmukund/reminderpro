import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReminder } from '../actions';

class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			text: ''
		}
	}

	addReminder(){
		this.props.addReminder(this.state.text);
		console.log(this.props);
	}

	render(){
		console.log(this);
		return(
			<div className="App">
				<div className="title">Reminder Pro</div>
				<div className="form-inline">
					<div className="form-group">
						<input className="form-control" placeholder="I have to..." 
						onChange = {(event)=>{this.setState({text:event.target.value})}}/>
						<button type="button" className="btn btn-success" onClick = {() => {this.addReminder()}}>
						Add Reminder</button>
					</div>
				</div>
			</div>
			
			)
	}
} 

function mapStateToProps(state){
	return {
		reminders: state
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({addReminder}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

