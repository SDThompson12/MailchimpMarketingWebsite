var express = require("express");
var router = express.Router();

//Index Route
router.get('/', function(request, response)
{
		response.render("./marketingPage.ejs");
	});

module.exports = router;