export const createAction = (type, params) => ({ type, payload: params });

export const addDays = (days) => {
  // 86400000 - one day in miliseconds
  var ms = new Date().getTime() + (86400000 * days);
  return new Date(ms);
}

export const formatDateNumber = (date) => {
  const stringDate = `${date}`;
  if (stringDate.length == 1) {
    return `0${stringDate}`;
  }
  return stringDate;
}

export const getKeyDateTime = (date) => {
  const day = formatDateNumber(date.getDate());
  const month = formatDateNumber(date.getMonth() + 1);
  const year = formatDateNumber(date.getFullYear());
  return [year, month, day].join('-');
}