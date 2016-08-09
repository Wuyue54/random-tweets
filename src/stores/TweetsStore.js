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
		this.bgColor  = randomColor({
						   luminosity: 'light',
						   hue: 'green'
						});;
	}

	onGetTweetsSuccess(data){
		console.log(data);
		this.tweets = data;
		this.bgColor = randomColor({
						   luminosity: 'light',
						   hue: 'green'
						});
		this.height ='auto';
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