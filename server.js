require('babel-register');

const http =require('http');
const Twitter = require('twitter');
const express = require('express');

const app = express();
app.set('port', process.env.PORT || 8000);
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

app.get('/api/getTweets',function(){
	client.get('search/tweets', {q: 'fuck'}, function(error, tweets, response) {
	   console.log(tweets);
	});
});



app.listen(app.get('port'),function(){
	console.log("Express server listening on port " + app.get('port'));
});
// var params ={
// 	track:'fuck',
// 	delimited : 'length'
// }
// client.stream('statuses/filter', params,  function(stream) {

//   stream.on('data', function(tweet) {
//   	var flag= Boolean(tweet.text);
//   	if(flag == true){
//   		// tweets.push(tweet);
//   		console.log(tweet.text);
//   	}
//   });

//   stream.on('error', function(error) {
//     console.log(error);
//   });

// });
