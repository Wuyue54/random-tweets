import React from 'react';
import TweetsActions from '../actions/TweetsActions';
import TweetsStore from '../stores/TweetsStore';
import Tweet from './Tweet';
import Typist from 'react-typist';	


class Tweets extends React.Component{
	constructor(props){
		super(props);
		this.state = TweetsStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount(){
		TweetsStore.listen(this.onChange);
	}

	componentWillUnmount(){
		TweetsStore.unlisten(this.onChange);
	}

	onChange(state){
		this.setState(state);
	}

	handleSubmit(e) {
		let value = this.refs.searchInpu.value;
		let flag = Boolean(value);
		if(!flag){
	    	alert('please input sth');
	    	return;
	    }

    	e.preventDefault();
	    let searchQuery = this.state.searchQuery.trim();
	    
	    if (searchQuery) {
	      TweetsActions.getTweets({
	        searchQuery: searchQuery,
	        searchForm: this.refs.searchForm,
	      });
	    }
	}

	render(){
		let tweets = [];
		this.state.tweets.forEach((t ,index)=>{
			tweets.push(<Tweet  key ={index}
								query = {this.state.searchQuery}
								created_at = {t.created_at}
								text = {t.text}
								username = {t.user.name}
						/>);
		});

		let styleObj ={
            backgroundColor: this.state.bgColor,
            height: this.state.height
        };

		return(
			<div className ='bg' style = {styleObj}>
				<h1 className ='title'>Random Tweets</h1>
				<div className = 'mainPart'>
					<form ref='searchForm' className = 'inputGroup' onSubmit = {this.handleSubmit.bind(this)}>
						<input  ref = 'searchInpu'
								type = 'text' 
								className ='input' 
								placeholder ='try some tweets' 
								value = {this.state.searchQuery}
								onChange={TweetsActions.updataSearchQuery}
						/>
						<button onClick={this.handleSubmit.bind(this)}>Go</button>
					</form>
					<ul className ='tweetsList'>
        				{tweets}
      				</ul>					
				</div>
			</div>
		);
	}
}

export default Tweets;