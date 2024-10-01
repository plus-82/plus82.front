export const convertDateToStandardFormat = (date: Date) =>
  new Intl.DateTimeFormat('en-US').format(date)
