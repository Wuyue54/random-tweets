import React from 'react';

class Tweet extends React.Component{
	render(){
		return(
			<li>
				<p>{this.props.text}</p>
				<p>{this.props.created_at}</p>
				<p>{this.props.username}</p>
			</li>
		);
	}
}

export default Tweet;