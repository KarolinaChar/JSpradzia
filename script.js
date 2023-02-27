/*var firstName = "Karolina";
var lastName = "Charciunaite";
var age = 26;

console.log("I am",firstName,lastName,"and I am",age,"years old.")
console.log(age/age)

//var title = document.querySelector("#title")
//title.innerHTML = firstName;

var person = {
    firstName: "Karolina",
    lastName: "Charciunaite",
    hobbies: ["shopping", "reading", "eating", "annoying"],
    email: "kch@gmail.com"
}

console.log(person);
person["newname"] = "3";
console.log(person);

var spalvos = ["balta", "juoda", "raudona"];
var array = [1, "lol", 3]

console.log(array)
console.log(spalvos[0])

var nestedArray = [
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [7, 8, 9, 10],
    [11, 12, 13, 14]
];

var bones = ["femur", "clavicle", 3, "xiphoid"];
bones.push("5");
bones.unshift("ulna")

console.log(bones)

//console.log(nestedArray)

alert("SPAUZDIA TIK LOPAI")
*/

const todos = [
    {
        id: 1,
        text: "Learn JavaScript",
        isCompleted: false
    },
    {
        id: 2,
        text: "Eat",
        isCompleted: true
    },
    {
        id: 3,
        text: "Workout",
        isCompleted: true
    }
];

console.log(todos);

//For
for(var i=0; i < todos.length; i++) {
    console.log(todos[i].text)

for(var todo of todos) {
    console.log(todo.id);
 }
}
//while
var i = 0;
while(i < todos.length) {
    console.log(todos[i].text);
    i++;
}
//ForEach
todos.forEach(function(todo) {
    console.log(todo.text)
});

//map
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

//filter

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text
})
    
console.log(todoCompleted);

//todoUncompleted
var todoUncompleted = todos
.filter(function (todo) {
    return todo.isCompleted === false;
})
.map(function (todo) {
    return todo.text;
})
console.log(todoUncompleted);

//if
var x = 10;
if(x === 10) {
    console.log("x is equal to 10")
}
else if(x > 10) {
    console.log("x is greater than 10")
}
else if(x <10) {
    console.log("x is lower than 10")
}
else {
    console.log("x is not equal to 10")
}
 
//or
var x = 10;
var y = 20;
if(x > 10 || y < 40) {
    console.log("x is greater than 10 or y is lower than 40")
}

//and
var x = 10;
var y = 20;
if(x > 9 && y < 40) {
    console.log("x is greater than 10 and y is lower than 40")
}

//switch
var number = "1";

switch(number) {
    case "1":
        console.log("Number is one");
        break;
    case "2":
        console.log("Number is 2");
        break;
    default:
        console.log("Number is nor one, nor 2");
        break;
}

//Person
//Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;

    }
    Person.prototype.getFullName = function() {
        return `${this.firstName} ${this.lastName}` ;    
    }
    Person.prototype.getBirthYear = function() {
        return this.dob.getFullYear();
    }

// Instantiate object
var user1 = new Person("Viktor", "Johanson", "10-2-1978");
var user2 = new Person("Sarah Jessica", "Parker", "14-7-1898");

console.log(user2.getFullName());
