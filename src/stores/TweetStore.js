import alt from '../alt';
import TweetActions from '../actions/TweetActions';

class TweetStore{
	constructor(){
		this.bindActions(TweetActions);
		this.tweets = [];
		this.query = '';
	}

	onGetTweetsSuccess(data){
		console.log(data);
		this.tweets = data;
	}

	onGetTweetsFail(error){
		console.log(error);
	}

	onUpdateQuery(e){
		this.query = e.target.value;
	}
}

export default alt.createStore(TweetStore);