

/*
  Write a node program that takes in an unlimited number of
  command line arguments, goes through each and prints out
  the sum of them.
  If any argument is not a whole number, skip it.
  Do support negative numbers though.
*/

//Go through each command line argument

//Iterator, Condition, Modifier

const addNumbers = function(commands){
    let sum = 0;
    for(let i =2;i<commands.length;i++)
    {
        //how to determine if it's a  whole number  
        let number=Number(commands[i]);
        
        //output error message if one is not a number
        if(isNaN(number))
        {
        console.log(`ERROR: An entry was found that is not a number: ${commands[i]}`);
        }  

        //Skip numbers that are not whole
        if(number % 1 === 0){
            sum += number;
        }
    }
    //print it out
console.log('Sum Results:' + sum);
}



//Take in Arguments from the Command line
//const commands = process.argv; //array
//addNumbers(commands);


//Careful as the method starts adding on index 2
addNumbers([1, 2, 3, 4, 5]);


