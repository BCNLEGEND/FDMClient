function changeDates(dates) {
  const newDates = dates.map((date) => new Date(date));
  return newDates;
}

const dates = [
  '2022-11-02',
  '2022-11-03',
  '2022-11-14',
  '2022-11-15',
  '2022-11-26',
  '2022-11-27',
  '2022-12-09',
  '2022-12-21',
  '2022-12-22',
  '2023-01-02',
  '2023-01-03',
  '2023-01-14',
  '2023-01-15',
  '2023-01-27',
  '2023-02-08',
  '2023-02-09',
  '2023-02-20',
  '2023-02-21',
  '2023-03-04',
  '2023-03-05',
  '2023-03-17',
  '2023-03-29',
  '2023-03-30',
  '2023-04-10',
  '2023-04-11',
  '2023-04-22',
  '2023-04-23',
  '2023-05-05',
  '2023-05-17',
  '2023-05-18',
  '2023-05-29',
  '2023-05-30',
  '2023-06-10',
  '2023-06-11',
  '2023-06-23',
  '2023-07-05',
  '2023-07-06',
  '2023-07-17',
  '2023-07-18',
  '2023-07-29',
  '2023-07-30',
  '2023-08-11',
  '2023-08-23',
  '2023-08-24',
  '2023-09-04',
  '2023-09-05',
  '2023-09-16',
  '2023-09-17',
  '2023-09-29',
  '2023-10-11',
  '2023-10-12',
  '2023-10-23',
  '2023-10-24',
  // '2023-11-04',
  // '2023-11-05',
  // '2023-11-17',
  // '2023-11-29',
  // '2023-11-30',
  // '2023-12-11',
  // '2023-12-12',
  // '2023-12-23',
  // '2023-12-24',
];

export const calendarDates = changeDates(dates);
