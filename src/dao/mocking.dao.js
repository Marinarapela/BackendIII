import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

export class MockPetsDAO {
    generate(num = 100) {
        const pets = [];
        for (let i = 0; i < num; i++) {
            pets.push({
                _id: faker.database.mongodbObjectId(),
                name: faker.animal.dog(), 
                species: faker.animal.type(),
                age: faker.number.int({ min: 1, max: 15 }),
                color: faker.color.human(),
                adopted: false,
                owner: null,
                createdAt: faker.date.past(),
                updatedAt: faker.date.recent(),
            });
        }
        return pets;
    }


    generatePets(amount = 1) {
        const pets = [];
        for (let i = 0; i < amount; i++) {
            pets.push({
                name: faker.animal.dog(),
                species: faker.animal.type(),
                age: faker.number.int({ min: 1, max: 15 }),
                color: faker.color.human(),
                adopted: false,
                owner: null
            });
        }
        return pets;
    }
}


export class MockUsersDAO {
    constructor() {
        this.password = bcrypt.hashSync("coder123", 10);
    }

    generateUsers(amount = 50) {
        const users = [];
        for (let i = 0; i < amount; i++) {
            users.push({
                _id: faker.database.mongodbObjectId(),
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password: this.password,
                role: faker.helpers.arrayElement(["user", "admin"]),
                pets: [],
                createdAt: faker.date.past(),
                updatedAt: faker.date.recent()
            });
        }
        return users;
    }

}