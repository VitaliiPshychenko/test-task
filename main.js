// ES5

function Animal(name) {
  this.name = name;
}

Animal.prototype.getName = function() {
  return this.name;
}

function Dog(name) {
  Animal.call(this, name)
}

Dog.prototype.bark = function() {
  return `Dog ${this.name} is barking`
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// ES6

class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  
  getName() {
    return super.getName();
  }
  
  bark() {
    return `Dog ${this.name} is barking`
  }
}
