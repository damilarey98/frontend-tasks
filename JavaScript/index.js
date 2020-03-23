let studentName = "Sodiq";
console.log("My name is" + ' ' + studentName);



const courses = ["Python", "Node.Js", "JavaScript", "HTML", "CSS"];

console.log(courses.length);


console.log(studentName + ' ' + "offers these courses: " + ' ' + courses);

for (let course=0; course <= 200; course++) {
    if (course%2===1) {
        courses.push(course)
    }
}

console.log(courses);