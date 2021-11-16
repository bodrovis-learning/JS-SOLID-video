class Person {
  static tax = 0.13

  constructor(name, age, gross_salary) {
    this.name = name
    this.age = age
    this.gross_salary = gross_salary
  }

  netWage() {
    return this.gross_salary - this.gross_salary * Person.tax
  }

  saveDb() {
    console.log("Connecting to database...")
    console.log("Saving to database...")
  }
}

const person = new Person("John Doe", 30, 4000)

console.log(person.netWage())
person.saveDb()
