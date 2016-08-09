import React from 'react';
import TweetActions from '../actions/TweetActions';
import TweetStore from '../stores/TweetStore';
console.log(TweetActions);
console.log(TweetStore);
class Tweet extends React.Component{
	constructor(props){
		super(props);
		this.state = TweetStore.getState();
		this.onChange = this.onChange.bind(this);
		console.log(this.state);
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

	    let searchQuery = this.state.searchQuery.trim();

	    if (searchQuery) {
	      TweetActions.findCharacter({
	        searchQuery: searchQuery,
	        searchForm: this.refs.searchForm,
	      });
	    }
	}

	render(){
		return(
			<div>
				<div className = 'bg'>
					<form ref='searchForm' className = 'inputGroup' onSubmit = {this.handleSubmit.bind(this)}>
						<input type = 'text' 
								className ='input' 
								placeholder ='try some tweets' 
								value = {this.state.query}
								onChange={TweetActions.updateQuery}
						/>
						<button onClick={this.handleSubmit.bind(this)}>Go</button>
					</form>						
				</div>
			</div>
		);
	}
}

export default Tweet;