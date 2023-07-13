//First, talking about the function
const call = function(name){
    console.log(`Calling ${name}, Maybe?`);
}



call('Taylor Swift');
call('Ryan Ternier');

//Work into Call Me Maybe
const callMeMaybe1 = function(shouldCall, Name)
{
    if(shouldCall)
     call('Taylor Swift')
}


let callMech = null;
//let's add a callback - Call.
//Turning this into a Higher Order Function - a function that accepts another function as an argument.
const callMeMaybe = (shouldCall,name,callMechanism) =>{
    if(shouldCall)
        callMechanism(name);

    callMech = callMechanism;
}

callMeMaybe1(true, 'Taylor Swift');
callMeMaybe(true, "Taylor Swift", call);
callMech('Bryan Adams');

//So why callbacks? Reusable, maintainable, loosely coupled
const scream = function(name){
    console.log('Screaming your name, ' + name);
}

const getAFriendToCall = function(name){
    console.log(`Hey Friend, call ${name} for me`);
}


callMeMaybe(true, 'Ryan Ternier', scream);

//So why do this?
//Your method doesn't need to care about the callbacks and functions passed to it. 