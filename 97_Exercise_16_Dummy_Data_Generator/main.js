const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

const Employee = require("./models/Employee");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/company")
  .then(() => console.log("connected to MongoDB"));

function randomGenerator(arrayData) {
  const len = arrayData.length;
  const random = Math.floor(Math.random() * len);
  return random;
}
const firstname = [
  "Ronak",
  "Mayur",
  "Vraj",
  "Harsh",
  "Mahek",
  "Radhika",
  "Kishan",
  "Maitri",
  "Yagnika",
];
const salary = [40000, 50000, 22000, 30000, 45000, 80000, 47000];
const language = ["Java", "Python", "Cpp", "JavaScript", "Go", "Ruby"];
const city = ["New York", "Washington", "Gandhinagar", "Jaipur", "Patna"];
const ismanager = [true, false];

function employeeData() {
  const empData = {
    FirstName: firstname[randomGenerator(firstname)],
    Salary: salary[randomGenerator(salary)],
    Language: language[randomGenerator(language)],
    City: city[randomGenerator(city)],
    isManager: ismanager[randomGenerator(ismanager)],
  };
  return empData;
}

app.get("/", async (req, res) => {
  return res.render("index");
});

app.get("/api", async (req, res) => {
  const data = await Employee.find({});
  console.log(data);
  if (data.length === 0) {
    return res.render("index");
  }
  return res.send(data);
});

app.get("/generate", async (req, res) => {
  await Employee.deleteMany({});
  let result = []
  for(let i=0; i<10; i++){
      data = await Employee.create(employeeData());
      result.push(data)
  }
  if (result.length === 0) {
    return res.render("index");
  }
  return res.send(result);
});

app.post("/", async (req, res) => {
  return res.redirect("/");
});

app.listen(PORT, () =>
  console.log("Server is started on http://localhost:3000")
);
