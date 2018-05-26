import _ from 'lodash';

import ActionTypes from "../../actions/types";

const weather = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_WEATHER_SUCCESS:
      const { data } = action.payload;
      const newState = _.reduce(data, (acc, item, index) => {
        return {
          ...acc,
          [index]: item
        }
      }, {})
      return newState
    default:
      return state
  }
}

export { weather }
