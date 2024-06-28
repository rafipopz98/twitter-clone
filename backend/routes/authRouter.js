import express from 'express'
import { getMe, login, logout, signup } from '../controller/authController.js';
import { protectRoute } from '../middleware/protectRoute.js'

const router = express.Router();

router.post("/me", protectRoute, getMe)
router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

export default router;