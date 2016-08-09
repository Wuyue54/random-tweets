import alt from '../alt';
import TweetsActions from '../actions/TweetsActions';
import toastr from 'toastr';

class TweetsStore{
	constructor(){
		this.bindActions(TweetsActions);
		this.tweets = [];
		this.searchQuery = '';
	}

	onGetTweetsSuccess(data){
		this.tweets = data.statuses;
		console.log(this.tweets);
	}

	onGetTweetsFail(error){
		toastr.error(error.responseText);
	}

	onUpdataSearchQuery(e){
		this.searchQuery = e.target.value;
	}
}

export default alt.createStore(TweetsStore);