const components = require('./components')
const generator = require('./_generator')

module.exports = function (plop) {
  plop.setGenerator('Components', components)
  plop.setGenerator('Generator', generator)
}