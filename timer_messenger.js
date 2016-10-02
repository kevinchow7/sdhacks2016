
//Set timer for 2 hoursand 45 minutes
var myVar = setTimeout(text(4087283260), 9900000);
clearTimeout(myVar);



var text = function(number){
  // Twilio Credentials
  var accountSid = 'AC4a97f9b1e74267f8fe528e2eb12499a0';
  var authToken = '0de58650d5c6e19cfc1dea817942ecce';

  //require the Twilio module and create a REST client
  var client = require('twilio')(accountSid, authToken);

  client.messages.create({
      to: number,
      from: "+14088728657 ",
      body: "Hello there?",
      mediaUrl: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg",
  }, function(err, message) {
      console.log(message.sid);
  });

}
