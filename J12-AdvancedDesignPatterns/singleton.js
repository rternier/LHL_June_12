let instance = null;

class DatabaseConnection{
   connectionString = "localhost";

    constructor(){
        if(!instance){
            instance = this;
        }
        
        return instance;
       
    }

    connect(){
        console.log("I'm connecting to the DB on " + this.connectionString);
    }
}

const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();

console.log(db1 === db2);
db1.connectionString = '192.168.0.1';
db1.connect();
db2.connect();