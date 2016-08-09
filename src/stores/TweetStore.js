import alt from '../alt';
import TweetActions from '../actions/TweetActions';
import toastr from 'toastr';

class TweetStore{
	constructor(){
		this.bindActions(TweetActions);
		this.tweets = [];
		this.searchQuery = '';
	}

	onGetTweetsSuccess(data){
		console.log(data);
		this.tweets = data;
	}

	onGetTweetsFail(error){
		console.log('work');
		toastr.error(error.responseText);
	}

	onUpdataSearchQuery(e){
		this.searchQuery = e.target.value;
	}
}

export default alt.createStore(TweetStore);