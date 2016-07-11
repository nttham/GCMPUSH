var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var deviceSchema = mongoose.Schema({ 

	deviceName 		: String,
	deviceId		: String, 
	registrationId	: String
	
});
mongoose.connect('mongodb://admin:jsDw15a@54.169.162.137:10053/pushNotification',{auth:{authdb:'admin'}});

module.exports = mongoose.model('device', deviceSchema);        
