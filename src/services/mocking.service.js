import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import { MockPetsDAO, MockUsersDAO } from "../dao/mocking.dao.js";
import { MockPetDTO, MockUserDTO } from "../dto/Mocks.dto.js";
import Users from "../dao/Users.dao.js";
import Pets from "../dao/Pets.dao.js";


const mockPetsDAO = new MockPetsDAO();
const mockUsersDAO = new MockUsersDAO();

const usersDAO = new Users()
const petsDAO = new Pets ();

export const generateMockPets = (num = 100) => {
    const rawPets = mockPetsDAO.generate(num);
    return rawPets.map(p => new MockPetDTO(p));
};

export class MockingService {
    constructor() {
        this.password = bcrypt.hashSync("coder123", 10); // encriptado
    }

    generateUser() {
        return {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: this.password,
            role: faker.helpers.arrayElement(["user", "admin"]),
            pets: []
        };
    }

    generateUsers(amount = 1) {
        const users = [];
            for (let i = 0; i < amount; i++) {
                users.push(this.generateUser());
            }
        return users;
    }
}



export const generateMockUsers = (amount = 50) => {
    const rawUsers = mockUsersDAO.generateUsers(amount);
    return rawUsers.map(u => new MockUserDTO(u));
};

export const generateData = async (usersAmount, petsAmount) => {
    const users = mockUsersDAO.generateUsers(usersAmount);
    const pets = mockUsersDAO.generatePets ? mockUsersDAO.generatePets(petsAmount) : [];

    // Insertar en Mongo
    const savedUsers = await usersDAO.save(users); 
    const savedPets = pets.length ? await petsDAO.save(pets) : [];

    return { users: savedUsers, pets: savedPets };
};