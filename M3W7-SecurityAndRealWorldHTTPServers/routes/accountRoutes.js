const accountStore = require('../accountStore.js');
const bcrypt = require('bcrypt');
const cookieSession = require('cookie-session');

var express = require('express');
router = express.Router();

// Create (POST) a new account
router.post('/create', (req, res) => {
    const { emailAddress, name, password } = req.body;

    const saltRounds = 12;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

    console.log('Salt ' + salt);
    console.log('Password ' + hashedPassword);


    const newAccount = accountStore.createAccount(emailAddress,name,hashedPassword,salt, new Date());
    //res.status(201).json({ message: 'Account created successfully.', account: newAccount });
    res.redirect('/account')
  });
  
 
  // Read (GET) an account by email address
  router.get('/create', (req, res) => {     
      res.render("addAccount");      
  });

  // Login route (using bcrypt for password verification and setting a cookie upon successful login)
  router.post('/login', (req, res) => {
    const { username, password, rememberMe } = req.body;
    console.log("Data Entered: " + username + ", " + password);


    const account = accountStore.getAccountByEmail(username);
    console.log("Found account : " + account);

    const passwordsMatch = bcrypt.compareSync(password, account.password);
    console.log('Do passwords Match? ' + passwordsMatch);

    if (account && passwordsMatch){
      req.session.loggedIn = true;
      req.session.username = username;
      // Verify the password
      console.log("Logged in successfully");

      if(rememberMe){
        
      }
      res.redirect("/");
        
      }    
  else {
    // Authentication failed (account not found)
    console.log("Incorrect UN/PW");
    res.redirect("/");
  }
});

  
  
  // Read (GET) an account by email address
  router.get('/:emailAddress', (req, res) => {
    const emailAddress = req.params.emailAddress;
    
    const account = accountStore.getAccountByEmail(emailAddress);
    if (account) {
      res.render("editAccount",{account: account});
    } else {
      res.status(404).json({ message: 'Account not found.' });
    }
  });

  //Default Account Routes
  router.get('/', (req, res) => {
    const accounts = accountStore.getAllAccounts();
    res.render("viewAccounts", {accounts: accounts});
  });
  
  // Update (Post) an account by email address
  router.post('/:emailAddress', (req, res) => {
    const emailAddress = req.params.emailAddress;
    const updatedData = req.body;
    const updatedAccount = accountStore.updateAccount(emailAddress, updatedData);
    if (updatedAccount) {
      //res.json({ message: 'Account updated successfully.', account: updatedAccount });
      res.redirect("/account");
    } else {
      res.status(404).json({ message: 'Account not found.' });
    }
  });
  
  // Delete (DELETE) an account by email address
  router.post('/delete/:emailAddress', (req, res) => {
    const emailAddress = req.params.emailAddress;
    const deletedAccount = accountStore.deleteAccount(emailAddress);
    if (deletedAccount) {
      //res.json({ message: 'Account deleted successfully.', account: deletedAccount });
      res.redirect("/account");
    } else {
      res.status(404).json({ message: 'Account not found.' });
    }
  });


  router.get('/logout', (req,res)=>
  {
    req.session = null;
    console.log('logged out');
    res.redirect('/');
  })
  

  module.exports = router;