const express = require('express');
const PetService = require("./PetService");
const PetController = require("./PetController");

const petService = new PetService();
const options = {petService: petService};
const petController = new PetController(options);

const app =  express();
const port = 3000;

app.get('/pet/:id', (req, res) => petController.getPet(req, res));

app.listen(port, () =>{
    console.log("Server running on localhost");
})

