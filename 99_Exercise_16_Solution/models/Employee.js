const { Schema, model } = require("mongoose");

const empSchema = new Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean,
});

const Employee = model("Employee", empSchema);

module.exports = Employee;
