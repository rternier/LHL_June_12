
GitHub Repo: https://github.com/rternier/LHL_June_12/tree/main/M3W7-SecurityAndRealWorldHTTPServers
Powerpoint Presentaion:  https://github.com/rternier/LHL_June_12/blob/main/M3W7-SecurityAndRealWorldHTTPServers/M3W7%20-%20Real%20World%20HTTP%20Servers%20and%20Seceurity.pptx

## Goals:
* Build our a create user functionality
* * How do we store passwords?
* * How do we secure passwords? Encryption ? Hashing?  
* Build out a Login Functionality
* * How does the server remember me?
* * Cookies vs Session?
* * Stealing Cookies

## Authentication / Authorization
Authentication: Imagine a school dance where the bouncer checks your student ID card to confirm that you are a valid student before letting you inside the party.

Authorization: It's like getting a different colored wristband at the dance based on your age group – the school staff gives you access to certain areas or activities depending on which wristband you received after authenticating as a student.

## Top Security Risks

# Passwords
- Storing in Plain Text. 
- Never log or store the plain text version of a password. Ever.
- Resolved using hashing.

# Cookies
- Cookie information is stored in plain-text
- Plain text cookies can be modified
- We might impersonate another user
- Resolved by encrypting Cookie Data

# Here's how a MITM attack involving website cookies might occur:

- User connects to a website: Let's say a user wants to access a secure website, and they send a request to the website's server using their web browser.
- Attacker intercepts the communication: The attacker positions themselves between the user and the website's server, intercepting the data transmitted between them. This can be done through various means, such as compromising the user's Wi-Fi network, exploiting vulnerabilities in network infrastructure, or using malicious software.
- Website sends cookies: During the initial communication, the website's server sends cookies to the user's browser. Cookies are small pieces of data that websites use to store information on the user's device, often for authentication and session management purposes.
- Attacker captures cookies: As the attacker intercepts the communication, they can capture the cookies transmitted by the website's server to the user's browser.
- Manipulation or unauthorized access: With access to the user's cookies, the attacker can manipulate the contents of these cookies or use them to gain unauthorized access to the user's account on the website. For example, if the cookies contain authentication credentials, the attacker could use them to impersonate the user and gain access to their account.


# Stealing Cookie Information (or information in transit)
- HTTP is plain-text
- Man-in-the-middle attack
- Solved with HTTPS (SSL)


## REST
REST stands for "Representational State Transfer." It's a set of guidelines and principles used to design web applications and APIs (Application Programming Interfaces). REST is based on the idea that everything on the internet, like web pages or data, can be represented as resources.

Imagine the internet as a big library, and each web page, image, or piece of data is like a book in that library. REST provides a way for different computers and servers to interact with these resources in a standardized and organized manner.

In REST, we use simple and common HTTP methods like GET, POST, PUT, and DELETE to perform different actions on these resources.

	1. GET: When you want to read or retrieve data, like reading a page from a book, you use the GET method.

	2. POST: When you want to create something new, like writing a new page or adding a new book to the library, you use the POST method.

	3. PUT: When you want to update or change something, like editing a page in a book, you use the PUT method.

	4. DELETE: When you want to remove something, like tearing out a page or removing a book from the library, you use the DELETE method.

Each resource in REST is identified by a unique URL, just like the location of a book in the library is identified by its shelf number. So, when you use a web browser or an app, you are sending these HTTP requests to interact with the resources, and the server responds with the appropriate information or actions.

REST is widely used because it makes communication between computers and servers very organized and easy to understand. It's like having a universal language for computers to talk to each other and share information, making the internet and all its services work smoothly!


## Middleware
Middleware refers to a series of functions or code snippets that are executed in the middle of processing an incoming HTTP request and generating an HTTP response. Middleware functions play a crucial role in Express.js as they can perform various tasks, such as modifying the request and response objects, executing specific logic, or passing control to the next middleware in the stack.

EJS (Embedded JavaScript Templates): EJS is a template engine commonly used with Express.js to dynamically generate HTML content. It allows you to embed JavaScript code within HTML templates. However, when it comes to middleware, EJS itself is not middleware. Instead, EJS is used to render dynamic HTML views on the server-side, which can then be sent as responses to HTTP requests. Middleware in this context might be responsible for handling the incoming requests before rendering the EJS templates or processing the responses after the EJS rendering is complete.

Body-Parser: Body-Parser is a middleware module that comes bundled with Express.js (until version 4.x) and is used to parse the request body data. When a client sends data to the server through HTTP POST or PUT methods, the data is transmitted in the request body. Body-Parser middleware intercepts the incoming request, parses the body data, and makes it available in the req.body object, which can then be accessed by route handlers. This parsing capability is crucial for handling form submissions, API data, and other types of incoming data from clients.




## Modules to Look Into:
* nodemon - not have to restart Node.
    Scripts:{"scripts:"./node_modules/.bin/nodemon -L server.js"}
* bcrypt
* cookie-session
* morgan
* express
* * bodyparser is built into the newest version of Express!!! What!?
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev))


## Tricks
https://expressjs.com/en/starter/generator.html - route generator and file layout



