const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "mynameissomethingwhichiamnotwhatiwant"
// Create User Route
router.post("/createuser", [
    body('email').isEmail(),
    body('password', 'Password must have 5 characters').isLength({ min: 5 }),
    body('name').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10); // Corrected method name
    let secPassword = await bcrypt.hash(req.body.password, salt);
    try {
        await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
            location: req.body.location
        });
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Login User Route
router.post("/loginuser", [
    body('email').isEmail(),
    body('password', 'Password must have 5 characters').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const userData = await User.findOne({ email: req.body.email });
        if (!userData) {
            return res.status(400).json({ error: "Try logging in with correct credentials" });
        }

        const passwordMatch = await bcrypt.compare(req.body.password, userData.password);
        if (!passwordMatch) {
            return res.status(400).json({ error: "Try logging in with correct credentials" });
        }
        const data ={
            user:{
                id: userData.id
            }
        }
        const authToken = jwt.sign(data, jwtSecret)
        res.json({ success: true,authToken:authToken });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
