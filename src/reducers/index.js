import { constants } from '../constants';

const reminder = (action) => {
	return {
		text: action.text,
		id: Math.random()
	}
}

const reminders = (state=[], action) => {

	let reminders = null;
	console.log("state being passed to the reducer ", state);
	switch(action.type){
		case constants.ADD_REMINDER:
			reminders = [...state, reminder(action)];
			return reminders;
		case constants.DELETE_REMINDER:
			let filteredReminders = [...state].filter((reminder)=>{
				return reminder.id !== action.id;
			});
			return filteredReminders;
		default:
			return state;
	}
}

export default reminders;