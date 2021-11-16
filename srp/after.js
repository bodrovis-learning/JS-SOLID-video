class PersonDbProvider {
  constructor(person) {
    this.person = person
  }

  validate() {
    console.log("Validating...")
  }

  save() {
    console.log("Connecting to database...")
    console.log("Saving to database...")
  }
}

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
}

const person = new Person("John Doe", 30, 4000)

console.log(person.netWage())

const db_provider = new PersonDbProvider(person)
db_provider.save()
