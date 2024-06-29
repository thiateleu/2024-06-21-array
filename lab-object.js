// // 1. Using Dot Notation
// // const dog = {
// //     name: "Khadidja",
// // };

// // console.log(dog.name);

// // 2. Using Bracket Notation
// const cat = {
//     name: "Mary",
// };
// console.log(cat["name"]);

// ///////////JavaScript Object Operations
// ///1. Modify Object Properties
// const person = {
//     name: "Bobby",
//     hobby: "Dancing",
// };
// person.hobby = "Singing";
// console.log(person);

// ////// 2. Add Object Properties
// const student = {
//     name: "Mary",
//     age: 20,
// };

// // add properties
// student.rollNo = 14;
// student.faculty = "ComputerScience";

// // display the object
// console.log(student);

// /////3. Delete Object Properties
// const employee = {
//     name: "Tony",
//     position: "Officer",
//     salary: 30000,
// };

// // delete object property
// delete employee.salary

// // display the object
// console.log(employee);

///////////////////JavaScript Object Methods
const person = {
    name: "Bob",
    age: 30,

    // use function as value
    greet: function () {
        console.log("Bob says Hi!");
    }
};

// call object method
person.greet();  // Bob says Hi!