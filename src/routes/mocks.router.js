import { Router } from "express";
import { getMockingPets, getMockUsers, postGenerateData } from '../controllers/mocking.controller.js'

const router = Router();
// Ruta: GET /api/mocks/mockingpets
router.get('/mockingpets', getMockingPets);
router.get("/mockingusers", getMockUsers);
router.post("/generateData", postGenerateData);

module.exports = router;

