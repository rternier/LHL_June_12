let getUserFuction=null;

function fetchUserData(userId, successCallback, errorCallback) {
    // Simulating an asynchronous API request to fetch user data
    console.log('Fetching Data. This could take a bit of time...');
    const user = getUser(userId);

    //simulate an API Call
    if (user) {
        successCallback(user);
    } else {
        errorCallback("User not found.");
    }

    getUserFuction = function(){
        console.log('Setting an anon function to a variable');
    };
    
  }

  function getUser(id){
    if(id === 123)
    {
        const user = { id: userId, name: "Alice", age: 25 };
        return user;
    }
        return null;
  }
  
  function displayUserData(user) {
    console.log("User Data:");
    console.log("ID:", user.id);
    console.log("Name:", user.name);
    console.log("Age:", user.age);
  }
  
  function displayError(errorMessage) {
    console.log("Error:", errorMessage);
  }
  
  const userId = 123;
fetchUserData(userId, displayUserData, displayError);
getUserFuction(123);
