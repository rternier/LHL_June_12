//June 12 Cohort
//Lecture M1W2 - Callbacks

function greet(name, openGreeting){
    console.log(`Hi ${name}`);
    openGreeting();
}

function sayHello(){
    console.log('Hello, World!');
}

function screamHello(){
    console.log('Screaming Hello, World!');
}


//greet('June 12 Cohort', screamHello);
greet('June 12 Cohort', screamHello);

greet('June 12 Cohort', function(){
    console.log('this is an anonymous function callback!');
});

