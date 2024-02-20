const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  Salary: {
    type: Number,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  Language: {
    type: String,
    required: true,
  },
  isManager: {
    type: Boolean,
    required: true,
  },
});

const Employee = mongoose.model('employee', empSchema)

module.exports = Employee