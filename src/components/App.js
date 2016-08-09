import React from 'react';
import Tweets from './Tweets';
require('../style/style.scss');

class App extends React.Component{
	render(){
		return(
			<Tweets />
		);		
	}
}

export default App;