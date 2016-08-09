import React from 'react';

class Tweet extends React.Component{
	render(){
		// let query = this.props.query.trim();
		// let text = this.props.text; 
		// text.split(' ').map((c)=>{
		// 	if (c == query){

		// 	}
		// }).join();
		let user = this.props.username;
		let screenName = this.props.screen_name;
		let url = 'https://twitter.com/' + screenName ;
		return(
			<li className = 'tweetSpan'>
				<p>{this.props.text}</p>
				{/* <p>{this.props.created_at}</p>*/}
				<a href={url}><strong>{user}</strong></a>
			</li>
		);
	}
}

export default Tweet;