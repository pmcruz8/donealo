import React from 'react';
import ReactDOM from 'react-dom';
import Header from './campaign_page/cp_header';
import Body from './campaign_page/cp_body';
import Sidebar from './campaign_page/cp_sidebar';

const CampaignPage = () => {
	return (
		<div className="wrapper">
			<Header />
			<Body />
			<Sidebar />
		</div>
	);
};

export default CampaignPage;
