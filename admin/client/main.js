import { Meteor } from 'meteor/meteor'
import React from 'react';
import ReactDOM from 'react-dom';

import AdminNavbar from './components/admin_navbar';
import CampaignsContainer from './components/campaigns/admin_campaigns_container';

const Admin = () => {
	return (
		<div className="wrapper">
			<AdminNavbar />
			<CampaignsContainer />
		</div>
	);
};

Meteor.startup(() => {
	ReactDOM.render(<Admin />, document.querySelector('.app-container'));
});
