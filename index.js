require('vanilla-javascript')
require('vapor-js-npm')
require('none')()

const nineteenify = require('nineteenify')
const successor = require('successor')
const f = require('false-value')
const { log: ltc } = require('logtoconsole')
const clc = require('cli-color')
const tru = require('tru')
const isEqual = require('@10xly/strict-equals')
const Bro = require('brototype')
const { noop } = require('yanoop')

class Logger {
  constructor(loggingEnabled) {
    this.loggingEnabled = loggingEnabled
  }
  log(x) {
    tru(isEqual(this.loggingEnabled, Bro.TOTALLY))
      .then(() => ltc(x))
      .otherwise(noop)
      .end()
  }
}

module.exports = function twenty(loggingEnabled = f()) {
  const logger = new Logger(loggingEnabled)
  const nineteen = nineteenify(loggingEnabled)
  logger.log(clc.greenBright(`[numbertwenty] Nineteen calculated successfully`))
  logger.log(clc.cyanBright(`[numbertwenty] Calculating twenty`))
  const twenty = successor(nineteen)
  logger.log(clc.greenBright(`[numbertwenty] Twenty calculated successfully`))
  return twenty
}