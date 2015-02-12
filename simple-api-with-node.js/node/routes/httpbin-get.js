
// Get modules
var fs = require('fs');
var responseText;

// GET method for this controller
exports.get = function(req, res){
	
	console.log(req.query.generate);
	// We will be checking query parameter for msisdn
	// And serving mock responses based on its value
	if (req.query.generate)
	{
		switch(req.query.generate)
		{
			case "1":
                return201Success(res);
                break;
			case "2":
                return202Success(res);
                break;
            default:
                returnGenericSuccess(res);
		}	
	} 
	else {
        returnGenericSuccess(res);
	}
};

return201Success = function (res) {

	fs.readFile(__dirname + '/responses/201success.json', 'utf8', function (err, data) {
	    if (err) {
	        throw err;
	    }
	    responseText = data;

		// Make sure response is not empty
		if (responseText != null){
			res.set('Content-Type','application/json');
			res.status(201);
			res.send(responseText);
		} 
		else {
			res.send("Empty response file!");
		}
	});
};

return202Success = function (res) {
	
	fs.readFile(__dirname + '/responses/202success.json', 'utf-8', function (err, data) {
	    if (err) {
	        throw err;
	    }
	    responseText = data;

	    // Make sure response is not empty
		if (responseText != null){
			res.set('Content-Type', 'application/json');
			res.status(202);
			res.send(responseText);
		} else {
			res.send("Empty response file!");
		}
	});
};

returnGenericSuccess = function (res) {

	fs.readFile(__dirname + '/responses/200success.json', 'utf-8', function (err, data) {
	    if (err) {
	        throw err;
	    }
	    responseText = data;

	    // Make sure response is not empty
		if (responseText != null){
			res.set('Content-Type', 'application/json');
			res.status(200);
			res.send(responseText);
		} else {
			res.send("Empty response file!");
		}
	});
};

