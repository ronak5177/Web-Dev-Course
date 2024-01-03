// The Shopping Cart Totalizer:
//     You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

const shoppingCart = [
    {
      id: 1,
      name: 'Product 1',
      price: 30,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 10,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 500,
      quantity: 3,
    }
  ];
  

  const totalPrice = shoppingCart.reduce((acc, nextItem)=> acc+ nextItem.price, 0)
  console.log(totalPrice)
  