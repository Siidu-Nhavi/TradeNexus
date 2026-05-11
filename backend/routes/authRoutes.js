const express = require('express');
const router = express.Router();
const { register, login, logout, refreshToken, getCurrentUser } = require('../controllers/AuthController');
const { authenticateToken } = require('../middleware/auth');

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/refresh-token', refreshToken);
router.post('/logout', logout);

// Protected routes
router.get('/me', authenticateToken, getCurrentUser);

module.exports = router;
