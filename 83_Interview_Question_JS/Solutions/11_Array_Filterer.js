// The Array Filterer:
//     You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

let products = [
    {
        "Product": "Book",
        "Price": 380,
        "Category": "History"
    },
    {
        "Product": "Novel",
        "Price": 280,
        "Category": "Current-affair"
    },
    {
        "Product": "Art-Craft",
        "Price": 1000,
        "Category": "History"
    },
    {
        "Product": "BBC-News",
        "Price": 500,
        "Category": "Current-affair"
    },
    {
        "Product": "Human Pschycology",
        "Price": 340,
        "Category": "Pschycology"
    },
]


const collect = products.filter((prod)=> prod.Category === "History")
console.log(collect)