const API_KEY = 'e767fad2807d4d2c92fdee3247ae6d92';
const apiPath = `https://api.weatherbit.io/v2.0/forecast/daily`;
const toQueryString = query => {
  return Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&');
}

export const fetchApi = params => {
  const query = {
    key: API_KEY,
    days: 7,
    city: 'Poznan',
    ...params
  }
  const endpoint = `${apiPath}?${toQueryString(query)}`;
  return fetch(endpoint);
}