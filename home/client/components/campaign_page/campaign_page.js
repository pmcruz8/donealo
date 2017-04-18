import React from 'react';
import ReactDOM from 'react-dom';
import Header from './cp_header';
import Body from './cp_body';
import Sidebar from './cp_sidebar';

const CampaignPage = () => {
	return (
		<div>
			<Header />
			<Body />
			<Sidebar />
		</div>
	);
};

export default CampaignPage;
