const mongoose = require('mongoose');

const dataSchema = mongoose.Schema(
  {
    date: Date,
    sensor1: Number,
    sensor2: Number,
    sensor3: Number,
    sensor4: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Data', dataSchema);