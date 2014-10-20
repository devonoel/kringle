var mongoose = require('mongoose');

module.exports = mongoose.model('Donation', {
	amount : Number
});
