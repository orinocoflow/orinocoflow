var db = require('arangojs')();
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.post('/login', function(req, res) {
  //var db = arango.Connection('http://127.0.0.1:8529');
  var fullResult = null;
   /* db.createCollection('my-data', function (err, collection) {
        console.log("ta rolando");
        if (err) return console.error(err);
        // collection is a DocumentCollection instance
        // see the Collection API and DocumentCollection API below for details
    });*/

    var email = req.body.email;
    var password = req.body.password;


     var collections = {read: 'users'};
     var action = String(function (params) {

       // This code will be executed inside ArangoDB!
       var mydb = require('org/arangodb').db;
         var qb = require('aqb');
         return mydb._query(qb.for('u').in('users')
                 .filter(qb.eq('u.email', '@email')).filter( qb.eq('u.password', '@password'))
               .return('u'),
           {email: params['email'], password: params['password']},
           function (err, cursor) {
               if (err) return console.error(err);
               // cursor is a cursor for the query result
           }).toArray();
     });
     db.transaction(collections, action,{email:email, password:password}, function (err, result) {
       if (err) return console.error(err);
         res.json(result);

         // result contains the return value of the action
     });
});



module.exports = router;
