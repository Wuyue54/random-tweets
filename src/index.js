import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

require('normalize.css');
require('./style/Grid.scss');
require('./style/style.scss');

ReactDOM.render(<App /> ,document.getElementById('app'));