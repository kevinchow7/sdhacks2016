// Express
var express = require('express');
var server = require('express')();
var bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

// Twilio
var accid = 'AC4a97f9b1e74267f8fe528e2eb12499a0';
var auth = '0de58650d5c6e19cfc1dea817942ecce';
var client = require('twilio')(accid, auth);

// Helper function for sending text messages.
function send_to(num, msg) {
    console.log('Sending `' + msg + "` to " + num + ".");
    client.messages.create({
        to: num,
        from: "+14088728657",
        body: msg
    }, function(err, message) {
        console.log(err);
        console.log(message);
    });
}

// Posts to <baseurl>/sms trigger use of Twilio's SMS API.
server.post('/sms', function (req, res) {
    send_to(req.body.num, req.body.msg);
});

// Listen for requests on port 3000.
server.listen(3000);
