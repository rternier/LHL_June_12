
class Hammer{
    constructor(type, weight){
        this.type = type;
        this.weight = weight;
    }


    use(){
        console.log(`I'm using the hammer which is ${this.weight} lbs and it is a ${this.type} hammer`);
    }
}

class SledgeHammer extends Hammer{
    constructor(weight){
        super('Sledge', weight);       
    } 
}

class BallPeenHammer extends Hammer{
    constructor(weight){
        super("BallPeen", weight);
    }
}

class ClawHammer extends Hammer{
    constructor(weight){
        super("Claw", weight);
    }

    use(){       
        console.log(`I don't know what i'm doing`);
    }
}


class HammerFactory{
    createHammer(type, weight){
        switch(type){
            case "claw":
                return new ClawHammer(weight);                
            case "sledge":
                return new SledgeHammer(weight);
            case "ballpeen":
                return new BallPeenHammer(weight);
            default:
                throw new Error ("This is an unknown Hammer.");

        }    
    }
}

const hammerFactory = new HammerFactory();
const claw = hammerFactory.createHammer('claw', 1);
const sh = hammerFactory.createHammer('sledge', 23582);
const bp = hammerFactory.createHammer('ballpeen', 5);

claw.use();
sh.use();
bp.use();
