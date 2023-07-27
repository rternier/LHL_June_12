const accountStore = require('../accountStore.js');
var express = require('express');
router = express.Router();


router.post('/login', (req, res) => {
  const { emailAddress, password } = req.body;
  const account = accountStore.getAccountByEmail(emailAddress);

  if (account && account.password === password) {
    // Authentication successful
    res.send('Login successful!');
  } else {
    // Authentication failed
    res.send('Login failed. Invalid credentials.');
  }
});

// Create (POST) a new account
router.post('/create', (req, res) => {
    const { emailAddress, name, password, salt, dateCreated, dateDeleted } = req.body;
    const newAccount = accountStore.createAccount(emailAddress,name,password,salt,dateCreated,dateDeleted);
    //res.status(201).json({ message: 'Account created successfully.', account: newAccount });
    res.redirect('/account');
  });
  
// Read (GET) all accounts
router.get('/create', (req, res) => {
  res.render('addAccount');
});

// Read (GET) all accounts
router.get('/', (req, res) => {
const allAccounts = accountStore.getAllAccounts();
//res.json(allAccounts);
res.render('viewAccounts', {accounts: accountStore.getAllAccounts()});
});
  
  // Read (GET) an account by email address
  router.get('/:emailAddress', (req, res) => {
    const emailAddress = req.params.emailAddress;
    const account = accountStore.getAccountByEmail(emailAddress);
    if (account) {
      res.render('editAccount', {account: account});
    } else {
      res.status(404).json({ message: 'Account not found.' });
    }
  });
  
  // Update (PUT) an account by email address
  router.post('/:emailAddress', (req, res) => {
    const emailAddress = req.params.emailAddress;
    const updatedData = req.body;
    const updatedAccount = accountStore.updateAccount(emailAddress, updatedData);
    if (updatedAccount) {
      //res.json({ message: 'Account updated successfully.', account: updatedAccount });
      res.redirect('/account');
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
      res.redirect('/account');
    } else {
      res.status(404).json({ message: 'Account not found.' });
    }
  });
  

  module.exports = router;