// class
// Constructor

const Car = function(color, model) {
  // properties
  this.color = color;
  this.model = model;
  
  // wrong way of creating method
  // this.startEngine = function(){
  //   console.log("login");
  // };
};

const instanceCar = new Car("Grey", "Atroz");
console.log(instanceCar);
console.log(instanceCar instanceof Car);

// prototype
Car.prototype.startEngine = function(){
  console.log("Engine started boom..booom.....");
};

console.log(Car.prototype);

Car.prototype.type = "4 Weehler";
console.log(Car.prototype);
console.log(instanceCar);

// ES6 Classes
// class declaration
// parent class
class Bike {
  constructor(color, model){
    this.color = color;
    this.model = model;
  };

  startEngine(){
    console.log("Start Engine!");
  };

  get bikeProperty(){
    console.log("Getter property always return some value!");
  };

  set setColor(color){
    this.color = color;
    console.log("new color: ", this.color);
  }
}

const bike = new Bike("Black", "Duke");
console.log(bike);
bike.startEngine();

Bike.prototype.breakType = function(){
  console.log("Break type!");
};

console.log(Bike.prototype);

// setter and getter method
bike.bikeProperty;
bike.setColor = "pink";


// Static Method
Bike.bikeMonitor = function(){
  console.log("Moitor of Bikes");
}

Bike.bikeMonitor();


// Class Inheritance
// child class
class TwoWheelerBike extends Bike {
  constructor(color, model, personCapacity){
    super(color, model);
    this.personCapacity = personCapacity;
  };

  keyMethod(){
    console.log("With key lock!");
  };
}

const hero = new TwoWheelerBike("Silver", "Mestro", 2);
console.log(hero);