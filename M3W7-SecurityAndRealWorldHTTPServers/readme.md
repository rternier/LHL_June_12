Base Lecture for M3W7 Security And Real World HTTP Servers
This is a base Bookstore App from M3W6.


## Goals:
* Build our a create user functionality
* * How do we store passwords?
* * How do we secure passwords? Encryption ? Hashing?  
* Build out a Login Functionality
* * How does the server remember me?
* * Cookies vs Session?
* * Stealing Cookies








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



## Out of Scope
* CORS
* JWT
* Deployment
* OWASP / Web cecurity in general