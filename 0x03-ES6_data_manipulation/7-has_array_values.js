const hasValuesFromArray = (set, array) => array.every((value) => set.has(value));

module.exports = hasValuesFromArray;
