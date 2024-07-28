'use strict';

const random = (min = 0, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  return Math.floor(Math.random() * (max - min) + min);
};

module.exports = { random };
