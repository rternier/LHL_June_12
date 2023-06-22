/*
This file is an example on the various callback lessons taught in this lecture and 
can be used alongside the other examples in the lecture

This file is meant to be refernece only, do not attempt to run this through node

*/

/********Functions as Values*******/
// Define a function
function sayHello() {
    console.log("Hello, World!");
  }
  
  // Assign it to a variable
  var hello = sayHello;
  
  // Invoke the function through the variable
  hello();



  /* Functions as Callbacks*/
  function greet(name, callback) {
    console.log('Hi ' + name);
    callback();
  }
  
 // Using our sayHello function from the previous example as a callback
 greet('John', sayHello);
  


 /******** Anonymous Function ********/

// Anonymous function as a callback
greet('Jane', function() {
    console.log('This is an anonymous function callback!');
  });


/*Function Calling vs Passing (reference to a function) */
// Wrong: Calls sayHello and passes its return value to greet
greet('Jane', sayHello());

// Right: Passes sayHello itself to greet
greet('Jane', sayHello);



/********Higher Order Functions*******/

  // Function that takes another function as an argument
function greetAndLog(greeting, name, callback) {
    console.log(greeting + ', ' + name);
    callback();
  }
//Accepts other functions as arguments
function greet(name, format) {
    console.log(format(name));
  }
  
  function uppercase(name) {
    return name.toUpperCase();
  }
  
  greet('John', uppercase);  // Outputs: 'JOHN'
  
  //Functions that return other functions
  function greet(name) {
    return function() {
      console.log('Hello ' + name);
    }
  }
  
  let greetJohn = greet('John');
  greetJohn(); // Outputs: 'Hello John'


  //Funtions thaat both accept other functions as arguments and return a function
  function whenMeetingJohn(callback) {
    return function() {
      var text = 'Hi, I am John';
      callback(text);
    }
  }
  
  function greet(name) {
    console.log(name);
  }
  
  var atMeeting = whenMeetingJohn(greet);
  atMeeting(); // Outputs: 'Hi, I am John'
  











  /******** Arrow Functions ********/
  // Arrow function equivalent of our anonymous function example
greet('Jane', () => console.log('This is an arrow function callback!'));



/********* Nested Scope and SCope Chain ********/
let globalVar = 'I am global!';

function outerFunction() {
  let outerVar = 'I am outer!';

  function innerFunction() {
    let innerVar = 'I am inner!';
    console.log(outerVar); // can access outerVar
    console.log(globalVar); // can access globalVar
    console.log(innerVar); // can access innerVar
  }

  innerFunction();
  console.log(innerVar); // ReferenceError: innerVar is not defined
}

outerFunction();
console.log(outerVar); // ReferenceError: outerVar is not defined


  