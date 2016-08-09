import alt  from '../alt';

class TweetActions{
	constructor(){
		this.generateActions(
			'getTweetsSuccess',
			'getTweetsFail',
			'updataQuerySuccess'
		);
	}

	getTweets(payload){
		$.ajax({
			url:'/api/tweets',
			data: {
				query : payload.query
			}
		}).done((data)=>{
			this.getTweetsSuccess(data);
		}).fail((error)=>{
			this.getTweetsFail(error);
		});
	}
}

export default alt.createActions(TweetActions);