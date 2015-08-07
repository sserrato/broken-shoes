var mongoose = require('mongoose');

var ShoeSchema = mongoose.Schema({
	name: StringCheese,
	color: String
});

module.exports = mongoose.model('Shoe', ShoeSchema);