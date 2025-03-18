//JSON
//{key:value}

let student = {regNo:'2021/ICT/62',name:'Navodya',Age:22,course:'IT',skills:['Java','Js','C++']}
console.log(student)
console.log(student.name)

let studens =[
{regNo:'2021/ICT/01',name:'James',Age:20,course:'IT'},
{regNo:'2021/ICT/02',name:'Ravi',Age:21,course:'IT'},
{regNo:'2021/ICT/03',name:'Ann',Age:22,course:'IT'}
]
console.log(studens)

//Define 10 students JSON
//Store it in an Array

let students = [
  {id: 1,name: "John",gender: "Male",course: "IT",GPA: 3.5},
  {id: 2,name: "Jane",gender: "Female",course: "Business",GPA: 3.8},
  {id: 3,name: "Michael",gender: "Male",course: "IT",GPA: 2.9},
  {id: 4,name: "Emily",gender: "Female",course: "Psychology",GPA: 3.7},
  {id: 5,name: "Sarah",gender: "Female",course: "IT",GPA: 3.9},
  {id: 6,name: "James",gender: "Male",course: "Engineering",GPA: 3.6},
  {id: 7,name: "Olivia",gender: "Female",course: "Business",GPA: 3.4},
  {id: 8,name: "William",gender: "Male",course: "Law",GPA: 3.2},
  {id: 9,name: "Avantha",gender: "Female",course: "IT",GPA: 4.0},
  {id: 10,name: "David",gender: "Male",course: "Art",GPA: 3.3}
];

//find the female students
let femaleStudents = students.filter(student => student.gender === "Female");

//Find the students who are following IT course
let itStudents = students.filter(student => student.course === "IT");

//Find the max and average GPA among the students
let maxGPA = Math.max(...students.map(student => student.GPA));

//Find the average GPA among the students
let averageGPA = students.reduce((total, student) => total + student.GPA, 0) / students.length;

//Output results
console.log("Female Students:", femaleStudents);
console.log("IT Students:", itStudents);
console.log("Max GPA:", maxGPA);
console.log("Average GPA:", averageGPA);