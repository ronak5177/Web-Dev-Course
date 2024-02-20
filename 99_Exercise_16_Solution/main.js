const express = require('express')
const app = express()
const port = 3000
const Employee = require("./models/Employee")

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/company1').then(()=> console.log("Mongodb Connected"));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'))

const names = ["Ronak", "Archana", "Shadab", "Mayuri", "Jainmin", "Kaushik", "Radhika"]
const languages = ["English", "Hindi", "German", "French", "Greek", "Brazilian"]
const cities = ["Ahmedabad", "Surat", "New York", "Toronto", "Maxico", "Scotland"]
const IsManager = [true, false]

const getRandom = (array)=> {
    return array[Math.floor(Math.random() * (array.length - 1))]
}

app.get('/', (req, res) => {
    res.render('index', {foo: 'FOO'});
  });

app.get('/generate', async (req, res) => {
    await Employee.deleteMany({})

    // Generate random data
    for (let i = 0; i < 10; i++) { 
        let e = await Employee.create({
            name: getRandom(names),
            salary: Math.floor(Math.random() * 22000),
            language: getRandom(languages),
            city: getRandom(cities),
            isManager: (Math.random()>0.5)?true:false,
        })

        // e.save()
        
    }

    res.render('index', {foo: 'FOO'});
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
