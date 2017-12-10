import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import action from '../actions';
import ReminderList  from './ReminderList.jsx';
import "./App.css";


class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			text: ''
		}
		console.log(action);
	}

	addReminder(){
		this.props.addReminder(this.state.text);
	}

	render(){
		return(
			<div className="App">
				<div className="title" >Reminder Pro</div>
				<div className="form-inline">
					<div className="form-group">
						<input className="form-control form-element" placeholder="I have to..." 
						onChange = {(event)=>{this.setState({text:event.target.value})}} />
						<button type="button" className="btn btn-success form-element" onClick = {() => {this.addReminder()}}>
						Add Reminder</button>
					</div>
				</div>
				<div>
					<ReminderList/>
				</div>
			</div>
			
			)
	}
} 

//reducers that return state of the app to the component's props
function mapStateToProps(state){
	return {
		reminders: state
	}
}

//action creators given to the component's prototype to help trigger a change in state
function mapDispatchToProps(dispatch){
	return bindActionCreators({addReminder: action.addReminder}, dispatch);
}

//Make component aware of the action and reducer
export default connect(mapStateToProps, mapDispatchToProps)(App);

