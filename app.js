var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

// '__dirname' - Just references to the current directory path Ex) .../workspace/seanjr-personaltests/ThePatchNotes

//Requiring Routes
var mainRoute = require('./routes/index.js');

//Imports Routes
app.use("/", mainRoute);


//For Local Port Functions and testing Website Changes: app.listen(3670, function()
//For Deployment Application running: app.listen(process.env.PORT, process.env.IP, function()

app.listen(3670, function()
{
console.log("Starting Mailchimp Marketing Page...");
})