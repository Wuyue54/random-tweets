import alt  from '../alt';

class TweetActions{
	constructor(){
		this.generateActions(
			'getTweetsSuccess',
			'getTweetsFail',
			'updataSearchQuery'
		);
	}

	getTweets(payload){
		$.ajax({
			url:'/api/tweets',
			data: {
				name:payload.searchQuery
			}
		}).done((data)=>{
			this.getTweetsSuccess(data);
		}).fail((error)=>{
			this.getTweetsFail(error);
		});
	}
}

export default alt.createActions(TweetActions);