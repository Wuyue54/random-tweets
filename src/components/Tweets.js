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
								img_url = {t.user.profile_image_url}
								screen_name ={t.user.screen_name}
								query = {this.state.searchQuery}
								created_at = {t.created_at}
								text = {t.text}
								username = {t.user.name}
						/>);
		});

		let bgStyleObj ={
            backgroundColor: this.state.bgColor,
            height: this.state.height
        };

        let titleStyleObj = {
        	marginTop: this.state.titleMarginTop
        };

		return(
			<div className ='bg' style = {bgStyleObj}>
				<h1 className ='title' style ={titleStyleObj}>Random Tweets</h1>
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