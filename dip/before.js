const fs = require('fs')

class TerminalPrinter {
  static write(msg) {
    console.error(msg)
  }
}

class FilePrinter {
  static write(msg) {
    fs.writeFile("log.txt", msg, function (err) {
      if (err) return console.log(err)
    })
  }
}

class Logger {
  constructor() {
    this.separator = '--->'
  }

  log_stderr(msg) {
    TerminalPrinter.write(this.#prefix() + msg)
  }

  log_file(msg) {
    FilePrinter.write(this.#prefix() + msg)
  }

  #prefix() {
    const current_datetime = new Date()
    return `${current_datetime.toLocaleString()} ${this.separator} `
  }
}

const logger = new Logger()
logger.log_file("Starting the program...")
logger.log_stderr("An error!")