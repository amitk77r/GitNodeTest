var url = require('url');
var fs = require('fs');
var config = require('../config');
var user = require('../model/user');
var waterfall = require('async-waterfall');
/*var redisWTagClient = redis.createClient("6379",config.REDIS_CONN_STR);
var redisIsReady = false;

redisWTagClient.on('error', function(err) {
    console.log("Redis isn't running..");
    redisIsReady = true;
});
redisWTagClient.on('ready', function() {
    console.log("Redis is running..");
    redisIsReady = true;
});
*/
var method = {};
method.getName = function(req, res) {
	try {
		/*
		 * res.writeHead(404, {'Content-Type': 'image/gif'});
		 * res.end(defaultImg, 'binary');
		 */

		 res.send('respond with a resource');


		/*res.writeHead(404, {
			"Content-Type" : "text/plain"
		});
		res.write("Tag Not Found");
		res.end();*/

	} catch (e) {
		rollbar.reportMessage("error in getting default email pixel " + e);
	}

};


method.getFName = function(req, res) {
	try {
		 
		 res.send(req.params.id);
 
	} catch (e) {
		rollbar.reportMessage("error in getting default email pixel " + e);
	}

};

/*
method.getUName = function (req,res,callback) {
var pg = require('pg');
        var uid = req.params.id;
  waterfall([
   function(callback){
    pg.connect(config.CONN_STR, function(err, client, done) {

        if (err) {
            return console.error('error fetching client from pool', err);
        }
        var query = 'SELECT * from users WHERE id='+uid;
          client.query(query, function (err, result) {
            if (err) {
                console.error('error running query=====', err);
            }
            if (result) {
                console.log('TRUEE',result);
                callback(null,result);
            } 
        });
    }); 
}
 
  
], function (err, result) {
  console.log('hhhhhhh'+result);
  res.send('success..'+result.rows[0].name);

});
};
*/


method.getUName = function (req,res) {
 
        var uid = req.params.id;
        
        callback = function (result){
        	console.log('Controler res....'+result);
        	res.send('success..'+result.rows[0].name);
        }
        user.getUser(uid,callback);
  
};




module.exports = method;