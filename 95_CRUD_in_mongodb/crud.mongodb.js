
// CRUD Operations
use("cruddb")

console.log(db)


// Create Collections
// db.createCollection("courses")


// CREATE
// db.courses.insertOne({
//     name: "Basic of Tailwind CSS",
//     price: 3000,
//     assignments: 10,
//     projects: 3
// })

// db.courses.insertMany([
//     {
//       "name": "Basic of Tailwind CSS",
//       "price": 3000,
//       "assignments": 10,
//       "projects": 3
//     },
//     {
//       "name": "Advanced JavaScript",
//       "price": 4000,
//       "assignments": 12,
//       "projects": 5
//     },
//     {
//       "name": "Responsive Web Design",
//       "price": 3500,
//       "assignments": 8,
//       "projects": 2
//     },
//     {
//       "name": "Node.js Fundamentals",
//       "price": 4500,
//       "assignments": 15,
//       "projects": 4
//     },
//     {
//       "name": "React.js Basics",
//       "price": 3800,
//       "assignments": 11,
//       "projects": 3
//     },
//     {
//       "name": "Vue.js Essentials",
//       "price": 4200,
//       "assignments": 10,
//       "projects": 4
//     },
//     {
//       "name": "SASS Styling Techniques",
//       "price": 3200,
//       "assignments": 9,
//       "projects": 2
//     },
//     {
//       "name": "Webpack Configuration",
//       "price": 4000,
//       "assignments": 12,
//       "projects": 3
//     },
//     {
//       "name": "GraphQL Basics",
//       "price": 3800,
//       "assignments": 10,
//       "projects": 4
//     },
//     {
//       "name": "MongoDB Fundamentals",
//       "price": 5000,
//       "assignments": 14,
//       "projects": 5
//     }
// ])


// READ
// let a = db.courses.find()
// console.log(a.toArray())

// let b = db.courses.findOne({price: 4000})
// console.log(b)

// UPDATE
// db.courses.updateOne({price: 3000}, {$set: {price: 5000}})
// db.courses.updateMany({price: 5000}, {$set: {price: 6500}})

// DELETE
// db.courses.deleteOne({name: "Basic of Tailwind CSS"})
// db.courses.deleteMany({price: 6500})
