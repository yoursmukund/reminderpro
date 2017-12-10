import React, {Component} from 'react';
import { connect } from 'react-redux';
import "./App.css";
import action from '../actions';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import { bindActionCreators } from 'redux';


class ReminderList extends Component{
	constructor(props){
		super(props);

	}

	deleteReminder(id){

		console.log("id recieved", id);
		this.props.deleteReminder(id);
	}

	displayReminders(){
		return this.props.reminders.map((reminder) => {
			return(
				<ListGroupItem className = "reminder-list-item" key = {reminder.id}>{reminder.text}
          			<span className="glyphicon glyphicon-remove reminder-list-item-delete" key = {reminder.id} onClick = {()=>{this.deleteReminder(reminder.id)}}></span>
				</ListGroupItem>
				);
		});
	}

	render(){
		return(
				<div className="container container-small col-md-4 col-md-offset-4">
					<ListGroup className="reminder-list-title">List of reminders
						{this.displayReminders()}
					</ListGroup>
				</div>
				
			);
	}
}

//reducers that return state of the app to the component's props
function mapStateToProps(state){
	return {
		reminders: state
	}
}

//action creators given to the component's prototype to help trigger a change in state
const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators({addReminder: action.addReminder, deleteReminder: action.deleteReminder}, dispatch)
	}
}

//Make component aware of the action and reducer
export default connect(mapStateToProps, mapDispatchToProps)(ReminderList);

