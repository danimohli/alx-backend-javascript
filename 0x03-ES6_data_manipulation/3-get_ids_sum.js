const getStudentIdsSum = (students) => students.reduce((preVal, cur) => preVal + cur.id, 0);

module.exports = getStudentIdsSum;
