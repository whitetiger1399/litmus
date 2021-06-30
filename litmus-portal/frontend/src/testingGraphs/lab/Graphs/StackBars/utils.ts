import { bisector } from 'd3-array';
import dayjs from 'dayjs';
import { BarDateValue, StackBarMetric } from './base';

const dateFormat = (date: number, xAxistimeFormat: string) => {
  return dayjs(new Date(date)).format(xAxistimeFormat);
};
const intToString = (value: number, unit: string) => {
  let numValue = '';
  const shortValue = parseFloat(value.toPrecision(2));
  numValue = shortValue.toString();

  if (shortValue % 1 !== 0) {
    numValue = shortValue.toFixed(2);
  }
  return `${numValue} ${unit}`;
};

// Accessor functions
const getBarDateNum = (d: StackBarMetric) => {
  if (d) {
    if (typeof d.date === 'number') {
      return new Date(d.date);
    }
    return new Date(parseInt(d.date, 10));
  }
  return new Date(0);
};
// Accessor functions
const getLineDateNum = (d: BarDateValue) => {
  if (d) {
    if (typeof d.date === 'number') {
      return new Date(d.date);
    }
    return new Date(parseInt(d.date, 10));
  }
  return new Date(0);
};

const getDateNumber = (d: string | number) => {
  if (d) {
    if (typeof d === 'number') {
      return d;
    }
    return parseInt(d, 10);
  }
  return 0;
};

const getValueNum = (d: BarDateValue) => {
  if (d) {
    if (typeof d.value === 'number') {
      return d.value;
    }
    return parseInt(d.value, 10);
  }
  return NaN;
};

const getValueStr = (d: BarDateValue) => {
  if (d) {
    if (typeof d.value === 'number') {
      return d.value.toFixed(2).toString();
    }
    return d.value;
  }
  return '';
};

// Bisectors
const bisectLineDate = bisector<BarDateValue, Date>(
  (d) => new Date(getLineDateNum(d))
).left;
const bisectBarDate = bisector<StackBarMetric, Date>(
  (d) => new Date(getBarDateNum(d))
).left;

export {
  getLineDateNum,
  getValueNum,
  getValueStr,
  bisectLineDate,
  getBarDateNum,
  bisectBarDate,
  getDateNumber,
  dateFormat,
  intToString,
};
