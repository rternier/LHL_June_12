### To Do!

- [X] Go through an epic Power Point
- [X] Watch DOM Cry
- [x] The Browser Object Model
- [x] The DOM
- [x] HTML, Head, Body, CSS, Style
- [x] Dev Tools
- [x] Jquery
- [x] Jquery Events
- [x] Jquery Element Creation



## The BOM (Browser Object Model)

The Browser Object Model (BOM) is a set of objects provided by web browsers that allow JavaScript code to interact with the browser itself. It provides a way for JavaScript to access and control the browser's features and functionalities beyond working with the content of a web page (which is handled by the Document Object Model or DOM).

The BOM consists of several objects, some of the most commonly used ones are:

# Window Object:
The window object represents the browser window and serves as the global object in client-side JavaScript.
It provides access to various properties and methods related to the browser window, like resizing, scrolling, opening new windows, and navigating to URLs.
# Navigator Object:
The navigator object provides information about the user's browser, such as the browser's name, version, and platform (operating system).
It allows developers to perform browser-specific checks or optimizations based on the user's environment.
# Screen Object:
The screen object provides information about the user's screen, like screen dimensions, color depth, and available space.
It helps developers design responsive and adaptive web layouts based on the user's screen size.
# Location Object:
The location object represents the URL of the current web page and provides methods to interact with it, like changing the URL or reloading the page.
It enables developers to perform URL manipulation and navigation within the same window.
# History Object:
The history object allows access to the browser's session history, enabling developers to move backward or forward in the user's browsing history.
It's useful for implementing custom navigation controls or managing the user's browsing experience.
# Document Object:
The document object is part of both the BOM and the DOM.
While it mainly represents the content of the current web page (DOM), it also provides some features like modifying the page's title or handling events related to the loading process.


# The BOM is not standardized by any official specification, so its features may vary slightly between different browsers. However, the core objects mentioned above are well-supported in most modern browsers.


### The Document Object Model (DOM)

The Document Object Model (DOM) is a programming interface provided by web browsers that allows developers to interact with and manipulate the content of a web page dynamically. It represents the web page as a structured tree-like model, where each element (like HTML tags) and text content is represented as a node in the tree. Developers can use JavaScript to access and modify these nodes, effectively changing the structure, content, and presentation of the web page without needing to reload the entire page.

Key points about the DOM:
 - Tree-like Structure: The DOM represents the HTML document as a hierarchical tree structure. The root of the tree is the document itself, and each element, attribute, and text node is a branch of the tree.
- Nodes: Nodes are the fundamental building blocks of the DOM. Each node represents an element, attribute, or text content within the HTML document.
Parent-Child Relationship: Nodes in the DOM have parent-child relationships. An element node can have child nodes (elements, text, or attributes), and it can also be a child of another element node.
- Accessing Nodes: JavaScript provides methods and properties to access and manipulate nodes in the DOM. Developers can use selectors, like getElementById() or querySelector(), to find specific elements based on their IDs, classes, or tags.
- Modifying Content: Developers can change the content, attributes, and style of elements in the DOM dynamically using JavaScript. This allows for real-time updates and interactive elements on the web page.
- Event Handling: The DOM also enables event handling, where developers can define functions that respond to user actions, such as clicks, keypresses, or mouse movements.
- Cross-Browser Compatibility: Although different browsers may have slight variations in their DOM implementations, the core concepts and methods are standardized, making it easier for developers to write cross-browser compatible code.
- Live Representation: The DOM provides a live representation of the web page. This means that any changes made to the DOM directly reflect on the displayed web page without requiring a full reload.

The DOM plays a crucial role in creating dynamic, interactive, and responsive web pages. With JavaScript and the DOM, developers can create sophisticated web applications, handle user interactions, and update the page content on-the-fly, providing a seamless and enjoyable user experience.


## Javascript to select elements
```javascript
document.getElementById(idSelector);
document.getElementsByTagName(tagName);
document.getElementsByName(name);
document.querySelector(selector);
document.querySelectorAll(selector);
document.getElementsByClassName(classSelector);
```
## JQuery to select Elements
```javascript
  // Equivalent of document.getElementById(idSelector)
  var elementById = $("#idSelector");
  // Equivalent of document.getElementsByTagName(tagName)
  var elementsByTagName = $("tagName");
  // Equivalent of document.getElementsByName(name)
  var elementsByName = $("[name='name']");
  // Equivalent of document.querySelector(selector)
  var singleElement = $(selector);
  // Equivalent of document.querySelectorAll(selector)
  var multipleElements = $(selector);
  // Equivalent of document.getElementsByClassName(classSelector)
  var elementsByClass = $(".classSelector");
```


### Common Pitfalls and errors
- Navigating the DOM through Parent / Child can introduce future bugs. If you are traversing the DOM through JavaScript any modifications to the element structure (adding surrounding div for example) has a large potential break your code.
- Element ID's are to be unique, don't duplicate them. JavaScript and Jquery scripts that lookup elements by ID will only get the first element.




# Useful Links
https://jquery.com/ - Contains API Documentation, and Download
