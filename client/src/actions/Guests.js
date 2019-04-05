export const changeGuests = (guestType, num) => ({
  type: 'CHANGE_GUESTS',
  guestType,
  num,
});

export const guestSelected = () => ({
  type: 'CHANGE_GUEST_SELECTION',
});

export const infantsSelected = () => ({
  type: 'CHANGE_INFANT_SELECTION',
});

export const guestDropdown = () => ({
  type: 'TOGGLE_GUEST_DROPDOWN',
});