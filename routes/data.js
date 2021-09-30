const express = require('express');
const router = express.Router();
const util = require('../config/util')
const axios = require('axios');

const Data = require('../Models/data');


setInterval(async() => {
  var targetTime = new Date();
  targetTime.setHours(targetTime.getHours() - 1);
  console.log(targetTime);

  const opendata = await axios.get(
    util.openDataURL,
    util.TOKEN
  );
  const { data } = opendata;
  const newData = new Data(data);
  await newData.save();
  console.log(data);
}, 180000);

router.get('/', async (_req, res) => {
  const data = await Data.find({});
  res.json(data);
});

module.exports = router;
