

class PetController{
    constructor(petService, dbConnection, logSystem, cacheSystem, hammerFactory){
        this.petService = petService;
      

    }

    getPet(req, res){
        const id = req.params.id;
        const pet = this.petService.getPetById(id);
        res.send(`Pet: ${pet}`);
   
    }
}
module.exports = PetController;