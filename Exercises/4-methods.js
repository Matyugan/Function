'use strict';

const methods = (iface) => {
  const functionDesc = [];

  for (const key in iface) {
    if (typeof iface[key] === 'function') {
      functionDesc.push([key, iface[key].length]);
    }
  }

  return functionDesc;
};

module.exports = { methods };
