const API_KEY = '0422fa0f6c5542ef9dd6d841231736fa';
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