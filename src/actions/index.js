import { ADD_REMINDER } from '../constants';

export const addReminder = (text) => {
	const action = {
		type: ADD_REMINDER,
		data: text
	}

	return action;
}