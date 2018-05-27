import ActionTypes from "../../actions/types";
import { addDays, formatDateNumber, getKeyDateTime } from '../../commons';

const generateState = () => {
  let acc = {};
  for (let i = 0; i < 7; i++) {
    const newDate = addDays(i);
    const datetime = getKeyDateTime(newDate)
    acc = {
      ...acc,
      [datetime]: []
    }
  }

  return acc;
}

const initialState = generateState();

const events = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_EVENT:
    const { day, data } = action.payload
      return {
        ...state,
        [day]: {
          id: Math.random(),
          data
        }
      }
    case ActionTypes.TOGGLE_EVENT: {
      const { day, id } = action.payload;
      return {
        ...state,
        [day]: {
          ...state[day],
          isDone: !state[day].isDone
        }
      }
    }
    default:
      return state
  }
}

export { events }
