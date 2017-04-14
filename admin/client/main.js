import React from 'react';
import ReactDOM from 'react-dom';

import AdminNavbar from './components/admin_navbar';
import CampaignsContainer from './components/campaigns/admin_campaigns_container';
import CreateCampaign from './components/campaigns/create_campaign';

const App = () => {
	return (
		<div className="wrapper">
			<AdminNavbar />
			<CampaignsContainer />
			<CreateCampaign />
		</div>
	);
};

Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.app-container'));
});
