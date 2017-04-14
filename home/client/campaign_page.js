import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/campaign_page/cp_header';
import Body from './components/campaign_page/cp_body';
import Sidebar from './components/campaign_page/cp_sidebar';

const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<Body />
			<Sidebar />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('.container'));
