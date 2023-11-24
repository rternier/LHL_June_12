/*
This code is to demonstrate ways of adding methods to classes using prototypes.

Javascript ES6 is built upon this style of prototype-based inheritance, and is effectively syntax sugar

Classes provide a much cleaner and more intuitive way to achieve the same results. This code file should
be used as a reference to how JS used to be written.

legacy Code is like this

*/
function Car(options){
    console.log(options);
    this.color = options.color || 'no color provided';
    this.doors = options.doors || 4;
}

Car.prototype.drive = function() {
    return "Driving a " + this.color + " car with " + this.doors + " doors.";
}


function Sedan(options)
{
    Car.call(this, options);
    this.type = 'Sedan';
}

Sedan.prototype = Object.create(Car.prototype);

function SUV(options){
    Car.call(this, options);
    this.type = 'SUV';
}

SUV.prototype = Object.create(Car.prototype);

function CarFactory(){}

CarFactory.prototype.createCar = function(options){
    console.log(options);
    switch (options.type){
        case 'sedan':
            return new Sedan(options);
        case 'suv':
            return new SUV(options);
        default: 
            return new Car(options);
    }
}

var carFactory = new CarFactory();
var sedan = carFactory.createCar({type:'sedan', color:'blue', doors:4});
console.log(sedan.drive());