const components = require('./components')
const context = require('./context')
const generator = require('./_generator')

module.exports = function (plop) {
  plop.setGenerator('Components', components)
  plop.setGenerator('Contexts', context)
  plop.setGenerator('Generator', generator)
}
