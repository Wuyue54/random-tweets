import alt  from '../alt';

class TweetsActions{
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
				tweet:payload.searchQuery
			}
		}).done((data)=>{
			this.getTweetsSuccess(data);
		}).fail((error)=>{
			console.log('fail');
			this.getTweetsFail(error);
		});
	}
}

export default alt.createActions(TweetsActions);