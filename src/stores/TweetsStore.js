import alt from '../alt';
import TweetsActions from '../actions/TweetsActions';
import toastr from 'toastr';
import randomColor from 'randomcolor';

class TweetsStore{
	constructor(){
		this.bindActions(TweetsActions);
		this.tweets = [];
		this.searchQuery = '';
		this.height = '100%';
		this.titleMarginTop = '3em';
		this.bgColor  = randomColor({
						   luminosity: 'light',
						   hue: 'blue'
						});;
	}

	onGetTweetsSuccess(data){
		console.log(data);
		this.tweets = data;
		this.bgColor = randomColor({
						   luminosity: 'light',
						   hue: 'blue'
						});
		this.height ='auto';
		this.titleMarginTop = '1em';
		console.log(this.tweets);
	}

	onGetTweetsFail(error){
		console.log(error);
		toastr.error(error.responseText);
	}

	onUpdataSearchQuery(e){
		this.searchQuery = e.target.value;
	}
}

export default alt.createStore(TweetsStore);