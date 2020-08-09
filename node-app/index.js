const arr = [1, 2, 3];

const generateStudentWithArrowFunction = item => { return `student-${item}` }

// valid
arr.map(function generateStudent(item) { return `student-${item}` })

arr.map(generateStudentWithArrowFunction)

// invalid
arr.map(function(item) { return `student-${item}` })

arr.map(item => { return `student-${item}` })

arr.filter(item => { return `student-${item}` })

arr.reduce(item => { return `student-${item}` })