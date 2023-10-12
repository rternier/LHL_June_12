# Lighthouse Labs | Data Fetching and Other Side Effects
# June 12 Cohort

[GitHub Repository Branch](https://github...) | [Vimeo Video Recording](https://vimeo...)

* [X] Side-Effects
* [X] React Hooks
* [X] The `useEffect` Hook
* [X] Data Fetching Example(s)


Pure Function
- Resuable
- Identitcal Return  given identical arguments
- No Side Effects


Impure Function
- Modify values outside of the function


```JavaScript
let count = 0;

const updateNumberOfVisitors = ()=>{
    count += 1;
}

function sum(x, y){
    console.log(Number(x) + Number(y));
    count = x + y;
    return count;    
}

```


What is a side effect?
- Console.Log
- Timer
- DOM update

## React Hooks

### What are Hooks?

In React, Hooks are functions that allow us to tap into select React features like **state**. We have already made use of one: `useState`! If you're curious about the complete list of Hooks available to use, check the official [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html).

### React Hook Rules

There are [rules](https://reactjs.org/docs/hooks-rules.html) we should follow when using React Hooks. There are two official ones:

1. Only call Hooks at the top level
2. Only call Hooks in React functions

## The `useEffect` Hook

### Side-Effects in React

We'd discussed how side-effects are defined in general when speaking about programming, but how do we see this play out in our React applications? A few of the most common side-effects you may encounter in React include:

* Timers
* Setting up a subscription
* Direct updates to the DOM
* Fetching data from an external resource
* Console logging

### Syntax

Alright, so if we need to perform an action that may be considered a side-effect, we should consider using the `useEffect` Hook. How do we use this Hook—what is it expecting from us?

The bare essential is calling the `useEffect` function and passing it a function as an argument that can be triggered after each render.

```JavaScript
// ...inside of a React component...

// Envoke React's useEffect Hook
useEffect(() => { // The first argument is a function

    // Your side-effect code here...

}); // If no second argument is present, the function will execute on every render. 
```

It isn't always desirable to have your function execute on *every* render. If this is not ideal for your use-case, consider adding the optional second argument: *dependencies*.

Let's review the two alternative approaches:

```JavaScript
// ...inside of a React component...

// Envoke the useEffect Hook as per usual
useEffect(() => { // Again, a function as the first argument
    
    // Your side-effect code here...

}, []); // An empty array as the second argument...

// An empty array as the second argument means that this side-effect function...
// will only execute at the end of the very FIRST render of this component.
// It will NOT run subsequent times as re-renders occur.
```

```JavaScript
// ...inside of a React component...

// Envoke the useEffect Hook as per usual
useEffect(() => { // Again, a function as the first argument
    
    // Your side-effect code here...

}, [props, state]); // An array containing prop and/or state data...

// If you pass one or more prop(s) and/or state(s) into the second argument array...
// your side effect function will run on the first render, and also any time a...
// change is detected in any of the respective prop(s) and/or state(s).
```


If you find your side-effect leaves some "garbage" lying around that may need cleaning up, this Hook gives us the opportunity to set up our own cleanup function as well. What are some cases in which we might want to unset something or clean a value up?

* Cancelling a timeout
* Retiring an interval
* Removing an event listener
* Terminating a socket connection

How do we set up our clean-up functions?

```JavaScript
// ...inside of a React component...

useEffect(() => {

    // Optionally, your function can return a clean-up function.
    return () => {}; // Include any clean-up steps in this returned function.

});