// create routes for the data insertion in database

const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
    // console.log(req.body);
    const { name, dateTime, address, imageDataURL, area } = req.body;
    var date = dateTime;//dateTime?.split("T")[0]??new Date().split("T")[0];
    var image_url = imageDataURL;
    try {
        const user = new User({ name, date, address, image_url, area });
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        console.log(e.message); 
        res.status(400).send(e);
    }
})

module.exports = router;


