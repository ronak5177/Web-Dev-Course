class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello from static method !!";
    }
  }
  
  const myCar = new Car("Ford");
  console.log(Car.hello())
  console.log(myCar.hello())   // will raise an error