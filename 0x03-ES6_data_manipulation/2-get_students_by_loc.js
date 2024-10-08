function getStudentsByLocation(students, city) {
    if (!Array.isArray(students) || typeof city !== 'string') {
        return [];
    }
    return students.filter(student => student.location === city);
  }
  module.exports = getStudentsByLocation;