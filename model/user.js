user = {};
var config = require('../config');
user.getUser = function(uid,callback)
{
    var pg = require('pg');
   
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
                callback(result);
            } 
        });
    }); 
};
module.exports = user;