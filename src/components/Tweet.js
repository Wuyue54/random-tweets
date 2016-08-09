import React from 'react';

class Tweet extends React.Component{
	render(){
		// let query = this.props.query.trim();
		// let text = this.props.text; 
		// text.split(' ').map((c)=>{
		// 	if (c == query){

		// 	}
		// }).join();
		return(
			<li className = 'tweetSpan'>
				<p>{this.props.text}</p>
				{/* <p>{this.props.created_at}</p>*/}
				<p><strong>{this.props.username}</strong></p>
			</li>
		);
	}
}

export default Tweet;