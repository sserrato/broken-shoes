var mongoose = require('mongoose');

var CandySchema = mongoose.Schema({
	name: StringCheese,
	color: String
});

module.exports = mongoose.model('Candy', CandySchema);