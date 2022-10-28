export const healthData = {
  weight: [
    {
      date: `${new Date('2021-06-01').getDate()} - ${
        new Date('2021-06-01').getMonth() + 1
      }`,
      weight: 85.3,
    },
    {
      date: `${new Date('2021-06-07').getDate()} - ${
        new Date('2021-06-07').getMonth() + 1
      }`,
      weight: 82.9,
    },
    {
      date: `${new Date('2021-06-14').getDate()} - ${
        new Date('2021-06-14').getMonth() + 1
      }`,
      weight: 80.3,
    },
    {
      date: `${new Date('2021-06-21').getDate()} - ${
        new Date('2021-06-21').getMonth() + 1
      }`,
      weight: 79.9,
    },
    {
      date: `${new Date('2021-06-28').getDate()} - ${
        new Date('2021-06-28').getMonth() + 1
      }`,
      weight: 80.2,
    },
    {
      date: `${new Date('2021-07-03').getDate()} - ${
        new Date('2021-07-03').getMonth() + 1
      }`,
      weight: 78.9,
    },
    {
      date: `${new Date('2021-07-24').getDate()} - ${
        new Date('2021-07-24').getMonth() + 1
      }`,
      weight: 75,
    },
  ],
  height: 1.85,
  bmi: 75 / 1.85 ** 2,
  bpSystolic: [
    {
      date: `${new Date('2021-07-03').getDate()} - ${
        new Date('2021-07-03').getMonth() + 1
      }`,
      bpSystolic: 121,
    },
  ],
  bpDiastolic: [
    {
      date: `${new Date('2021-07-03').getDate()} - ${
        new Date('2021-07-03').getMonth() + 1
      }`,
      bpDiastolic: 80,
    },
  ],
  smoker: false,
  drinker: 'non-drinker',
};
