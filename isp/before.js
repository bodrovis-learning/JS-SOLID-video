class MyLib {
  constructor(opts) {
    this.opts = opts
    this.setup()
  }

  setup() {
    this.root = this.opts.root
    this.opts.effects.setup()
  }

  doWork() {
    console.log(`Doing work with ${this.root}`)
  }
}

const worker = new MyLib({
  root: '#my-app',
  effects: {
    setup: () => {}
  }
})

worker.doWork()