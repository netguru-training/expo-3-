import { createAction } from '../commons';
import ActionTypes from './types';

const addEventAction = (day, data) => createAction(ActionTypes.ADD_EVENT, { day, data });

export const addEvent = (day, data) => dispatch => {
  return dispatch(addEventAction(day, data));
}