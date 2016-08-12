import React from 'react';

class Tweet extends React.Component{
	render(){

		let time = this.props.created_at.split(' ');
		let remove = time.splice(4,1);


		let newTime = time.join(' ');

		let user = this.props.username;
		let screenName = this.props.screen_name;

		let url = 'https://twitter.com/' + screenName ;

		return(
			<li className = 'tweetSpan'>
				<p>{this.props.text}</p>
				<p className = 'created-time'>{newTime}</p>
				<div className = 'user-profile'>
					<a className = 'user-avatar' href = {url} ><img src = {this.props.img_url} /> </a>
					<a className = 'user-name' href={url}><strong>{user}</strong></a>
				</div>
			</li>
		);
	}
}

export default Tweet;