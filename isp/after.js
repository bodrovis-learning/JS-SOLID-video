class MyLib {
  constructor(opts) {
    this.opts = opts
    this.setup()
  }

  setup() {
    this.root = this.opts.root
    this.setupOptions()
  }

  setupOptions() {
    if(this.opts.effects) {
      this.opts.effects.setup()
    }
  }

  doWork() {
    console.log(`Doing work with ${this.root}`)
  }
}

const worker = new MyLib({
  root: '#my-app'
})

worker.doWork()