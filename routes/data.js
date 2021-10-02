const express = require('express');
const router = express.Router();
const util = require('../config/util')
const axios = require('axios');

const Data = require('../models/data');


setInterval(async() => {

    //deletes data older than 3 days
    try{
        var targetTime = new Date();
        targetTime.setDate(targetTime.getDate() - 4);
        console.log(targetTime);
        await Data.deleteMany({ createdAt: { $lt: targetTime } });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    

    //API call to retrive new data and save to database
    try {
      const opendata = await axios.get(util.openDataURL, util.TOKEN);
      const { data } = opendata;
      const newData = new Data(data);
      await newData.save();
      console.log(data);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  
}, 3600000);

// @route    GET api/data
// @desc     Get all data
// @access   Private
router.get('/', async (req, res) => {
    try {
      const data = await Data.find({});
      res.status(200).json(data);
    } catch (err) {
      console.error(err.message);
      res.status(400).send('Invalid signature');
    }
  
});

module.exports = router;
