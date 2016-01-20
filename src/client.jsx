var React = require('react');
import { browserHistory, Router, Route } from 'react-router';
var routes = require('./Routes.jsx')
var ReactDOM = require('react-dom')

module.exports = function () {
	ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('content'));
};