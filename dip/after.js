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

  log(msg, notifier) {
    notifier.write(this.#prefix() + msg)
  }

  #prefix() {
    const current_datetime = new Date()
    return `${current_datetime.toLocaleString()} ${this.separator} `
  }
}

class CustomLogger extends Logger {
  constructor() {
    super()
    this.separator = '::'
  }
}

const logger = new Logger()
logger.log("Starting the program...", FilePrinter)
logger.log("An error!", TerminalPrinter)

const c_logger = new CustomLogger()
c_logger.log("Starting the program...", FilePrinter)
c_logger.log("An error!", TerminalPrinter)