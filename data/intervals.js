const intervalsInDays = [
  1, 1.93, 3.71, 7.15, 13.77, 26.52, 51.07, 98.38, 189.49, 365,
];

const millisecondsPerDay = 24 * 60 * 60 * 1000;

const intervals = intervalsInDays.map((days) => days * millisecondsPerDay);

module.exports = { intervals };
