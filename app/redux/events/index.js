import ActionTypes from "../../actions/types";
import { addDays, formatDateNumber, getKeyDateTime } from '../../commons';

const generateState = () => {
  let acc = {};
  for (let i = 0; i < 7; i++) {
    const newDate = addDays(i);
    const datetime = getKeyDateTime(newDate)
    acc = {
      ...acc,
      [datetime]: [{
        id: Math.random(),
        title: `${Math.random()}`,
        description: `${Math.random()}`,
        isDone: false
      }]
    }
  }

  return acc;
}

const initialState = generateState();

const filterAndToggleEvent = (events, id) => {
  const restEvents = events.filter((item) => item.id !== id);
  const event = events.filter(item => item.id === id)[0];
  if (event) {
    return [...restEvents, { ...event, isDone: !event.isDone}];
  }
  return [...restEvents];
}

const events = (state = initialState, action) => {
  switch (action.type) {
      case ActionTypes.ADD_EVENT: {
      const { day, data: { description, title } } = action.payload
      return {
        ...state,
        [day]: [
          ...state[day],
          {
            id: Math.random(),
            description,
            title,
            isDone: false
          }
        ]
      }
    }
    case ActionTypes.TOGGLE_EVENT: {
      const { day, id } = action.payload;
      return {
        ...state,
        [day]: filterAndToggleEvent(state[day], id)
      }
    }
    default:
      return state
  }
}

export { events }
