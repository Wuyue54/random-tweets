import React from 'react';
import TweetActions from '../actions/TweetActions';
import TweetStore from '../stores/TweetStore';

class Tweet extends React.Component{
	constructor(props){
		super(props);
		this.state = TweetStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount(){
		TweetStore.listen(this.onChange);
	}

	componentWillUnmount(){
		TweetStore.unlisten(this.onChange);
	}

	onChange(state){
		this.setState(state);
	}

	handleSubmit(e) {
    	e.preventDefault();
    	console.log(this.state);
	    let searchQuery = this.state.searchQuery.trim();

	    if (searchQuery) {
	      TweetActions.getTweets({
	        searchQuery: searchQuery,
	        searchForm: this.refs.searchForm,
	      });
	    }
	}

	render(){
		return(
			<div>
				<h1>WTF</h1>
				<div className = 'bg'>
					<form ref='searchForm' className = 'inputGroup' onSubmit = {this.handleSubmit.bind(this)}>
						<input type = 'text' 
								className ='input' 
								placeholder ='try some tweets' 
								value = {this.state.searchQuery}
								onChange={TweetActions.updataSearchQuery}
						/>
						<button onClick={this.handleSubmit.bind(this)}>Go</button>
					</form>						
				</div>
			</div>
		);
	}
}

export default Tweet;