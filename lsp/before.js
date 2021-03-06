class Animal {
  constructor(attrs) {
    this.attrs = attrs
  }

  eat() {
    console.log("Ate food!")
  }
}

class Cat extends Animal {
  eat(amount) {
    if (amount >= 0.3) {
      console.log("Can't eat that much!")
    } else {
      console.log("Ate some cat food!")
    }
  }
}

class Dog extends Animal {
  eat() {
    console.log("Ate some dog food!")
  }
}

const pluto = new Dog({name: 'Pluto', age: 3})
const goofy = new Dog({name: 'Goofy', age: 2})
const buttons = new Cat(['Mr. Buttons', 4])

const animals = [pluto, goofy, buttons]

animals.forEach((animal) => {
  if(animal.attrs.age > 2) console.log(animal)
})