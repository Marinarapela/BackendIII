export default class MockPetDTO {
    constructor(pet) {
        this.id = pet._id;
        this.name = pet.name;
        this.species = pet.species;
        this.age = pet.age;
        this.color = pet.color;
        this.adopted = pet.adopted;
    }
}

export class MockUserDTO {
    constructor(user) {
        this._id = user._id;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.email = user.email;
        this.role = user.role;
        this.pets = user.pets;
        this.createdAt = user.createdAt;
        this.updatedAt = user.updatedAt;
    }
}
