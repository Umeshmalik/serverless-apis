const {getRandomNumber} = require("./src/random-number/handler")

exports.getRandomNumber = function(event, context, callback) {
    getRandomNumber(event, callback)
}