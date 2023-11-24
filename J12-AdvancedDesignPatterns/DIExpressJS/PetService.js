class PetService{
    getPetById(id){
        const pets = {1: 'Dog', 2: 'Cat', 3: 'Zebra'};
        return pets[id] || 'No Pet Found';
    }
}
module.exports  = PetService;