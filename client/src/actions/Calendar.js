export const changeCheckIn = date => ({
  type: 'CHANGE_CHECKIN',
  date,
});

export const changeCheckOut = date => ({
  type: 'CHANGE_CHECKOUT',
  date,
});

export const changeMonth = command => ({
  type: 'CHANGE_MONTH',
  command,
  // TODO: command = next or back--new month/year calculated in reducer
});

// TODO: action needed for whether check-in/check-out DD is rendered?