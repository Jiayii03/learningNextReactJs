import express from 'express';
import { getUser } from "../controllers/general.js"

const router = express.Router();

// creating an API endpoint
// :id is a route parameter in Express.js route definition

router.get("/user/:id", getUser)

export default router;