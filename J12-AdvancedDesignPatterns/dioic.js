class Pet{
    makeSound(){
        //this needs to be overridden
    }
}

class Dog extends Pet{
    makeSound(){console.log("Woof");}
}
class Cat extends Pet{
    makeSound(){console.log("Meow");}
}

class PetOwner{
    constructor(pet){
        this.pet  = pet;
    }

    takeCareOfPet(){
        console.log("Taking care of my pet");
        this.pet.makeSound();
    }
}

const myDog = new Dog();
const mycat = new Cat();
const dogOwner = new PetOwner(myDog);
dogOwner.takeCareOfPet();