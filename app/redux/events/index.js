import ActionTypes from "../../actions/types";

const initialState = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: []
}

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
