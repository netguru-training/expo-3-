import { fetchApi } from './helpers';
import { createAction } from '../commons';
import ActionTypes from './types';

export const fetchDailyWeather = (params = {}) => dispatch => {
  const fetchWeatherRequest = () => createAction(ActionTypes.FETCH_WEATHER_REQUEST);
  const fetchWeatherSuccess = data => createAction(ActionTypes.FETCH_WEATHER_SUCCESS, { ...data });
  const fetchWeatherFailure = () => createAction(ActionTypes.FETCH_WEATHER_FAILURE);

  dispatch(fetchWeatherRequest());

  return fetchApi(params)
    .then(res => res.json())
    .then(res => dispatch(fetchWeatherSuccess(res)))
    .catch(err => dispatch(fetchWeatherFailure(err)));
};
