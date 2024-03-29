fetch('https://jsonplaceholder.org/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(users => {
    console.log(users);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
