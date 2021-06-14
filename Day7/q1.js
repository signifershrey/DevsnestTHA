// Write a JavaScript program to list the properties of a JavaScript object. 
// Sample object: 
// var student = { name: "David Rayy", sclass: "VI", rollno: 12 }; Sample Output: name, sclass, rollno

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(student.name);
console.log(student.sclass);
console.log(student.rollno);

var arr = Object.keys(student)
console.log(arr);

for (let key in student) {
    console.log(key);
}