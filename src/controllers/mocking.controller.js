import { generateMockPets, generateData, generateMockUsers } from '../services/mocking.service.js';

export const getMockingPets = (req, res) => {
    try {
        const pets = generateMockPets(100);
        res.status(200).json({
            status: 'success',
            payload: pets,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error generating mock pets',
        });
    }
};


export const getMockUsers = (req, res) => {
    try {
        const { amount } = req.query;
        const num = parseInt(amount) || 50;

        const users = generateMockUsers(num);

        res.status(200).json({
            status: "success",
            payload: users
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message || 'Error generating mock users',
        });
    }
};


export const postGenerateData = async (req, res) => {
    try {
        const { users, pets } = req.body;
        const numUsers = parseInt(users) || 0;
        const numPets = parseInt(pets) || 0;

        const result = await generateData(numUsers, numPets);

        res.status(200).json({
            status: "success",
            inserted: {
                users: result.users.length,
                pets: result.pets.length
            }
        });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};