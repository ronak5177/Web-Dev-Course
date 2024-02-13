/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('MyDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
        "Name": "Python",
        "Price": 8000,
        "Instructor": "Vraj"
      },
      {
        "Name": "Java",
        "Price": 9000,
        "Instructor": "Alex"
      },
      {
        "Name": "JavaScript",
        "Price": 7500,
        "Instructor": "Sophie"
      },
      {
        "Name": "C++",
        "Price": 8500,
        "Instructor": "Mike"
      },
      {
        "Name": "HTML",
        "Price": 5000,
        "Instructor": "Emma"
      },
      {
        "Name": "CSS",
        "Price": 4500,
        "Instructor": "Daniel"
      },
      {
        "Name": "Ruby",
        "Price": 7000,
        "Instructor": "Lily"
      },
      {
        "Name": "Swift",
        "Price": 9500,
        "Instructor": "Ethan"
      },
      {
        "Name": "PHP",
        "Price": 6000,
        "Instructor": "Olivia"
      },
      {
        "Name": "C#",
        "Price": 8800,
        "Instructor": "Noah"
      }
]);

// Print a message to the output window.
console.log(`Insertion in the database completed`);
