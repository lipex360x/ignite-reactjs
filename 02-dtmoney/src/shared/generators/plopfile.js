const generator = require('./_generator')

module.exports = function (plop) {
  plop.setGenerator('Generator', generator)
}