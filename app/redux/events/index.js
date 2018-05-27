import ActionTypes from "../../actions/types";
import { addDays, formatDateNumber, getKeyDateTime } from '../../commons';

// const addDays = (days) => {
//   // 86400000 - one day in miliseconds
//   var ms = new Date().getTime() + (86400000 * days);
//   return new Date(ms);
// }

// const formatDateNumber = (date) => {
//   const stringDate = `${date}`;
//   if (stringDate.length == 1) {
//     return `0${stringDate}`;
//   }
//   return stringDate;
// }

const generateState = () => {
  let acc = {};
  for (let i = 0; i < 7; i++) {
    const newDate = addDays(i);
    const datetime = getKeyDateTime(newDate)
    // const day = formatDateNumber(newDate.getDate());
    // const month = formatDateNumber(newDate.getMonth() + 1);
    // const year = formatDateNumber(newDate.getFullYear());
    // const datetime = [year, month, day].join('-');
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
        [day]: data
      }
    default:
      return state
  }
}

export { events }
