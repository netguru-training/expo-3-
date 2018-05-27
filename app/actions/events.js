import { createAction } from '../commons';
import ActionTypes from './types';

const addEventAction = (day, data) => createAction(ActionTypes.ADD_EVENT, { day, data });
const toggleEventAction = (day, id) => createAction(ActionTypes.TOGGLE_EVENT, { day, id });

export const addEvent = (day, data) => dispatch => {
  return dispatch(addEventAction(day, data));
}

export const toggleEvent = (day, id) => dispatch => {
  console.log("START AKCJA");
  return dispatch(toggleEventAction(day, id));
}
