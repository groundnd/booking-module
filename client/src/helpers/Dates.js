export const DateData = [
  { month: 'January', numDays: 31 },
  { month: 'February', numDays: 28 },
  { month: 'March', numDays: 31 },
  { month: 'April', numDays: 30 },
  { month: 'May', numDays: 31 },
  { month: 'June', numDays: 30 },
  { month: 'July', numDays: 31 },
  { month: 'August', numDays: 31 },
  { month: 'September', numDays: 30 },
  { month: 'October', numDays: 31 },
  { month: 'November', numDays: 30 },
  { month: 'December', numDays: 31 },
];

export const formatDate = (date) => {
  const d = new Date(date);
  let month = `${(d.getMonth() + 1)}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};
