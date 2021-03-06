require('babel-register');

const http =require('http');
const Twitter = require('twitter');
const express = require('express');
const path = require('path');

const app = express();

const isProduction = process.env.NODE_ENV === 'production';

app.set('port', process.env.PORT || 3000);
app.use('/static', express.static(__dirname + '/public'));


const client = new Twitter({
  consumer_key: 'PpzD3hzLPIVnxn4F0hdud2lZS',
  consumer_secret: 'a8dMMcGij9KXST4PVAqtr24LxyYZ6ozsK9qpWd83NBOooIzARx',
  access_token_key: '3440130436-9BjHUQfXQDETwHrXWFzbZUQGHgRGuL0LwrvEYb7',
  access_token_secret: 'y6sSaVYhgUKd3Ov7QeC3HTUrHS4a2NBSZ1CTueqYQlEO9'
});



app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/api/tweets',function(req,res){

	var filterObj = {
		q: req.query.tweet
	};
	
	client.get('search/tweets', filterObj, function(error, tweets, response) {

		if(error){
			console.log(error);
			res.send(error);
		}
		if(tweets){
			res.send(tweets.statuses);
		}
	});
});


const server = require('http').createServer(app);
server.listen(app.get('port'),function(){
	console.log("Express server listening on port " + app.get('port'));
});

