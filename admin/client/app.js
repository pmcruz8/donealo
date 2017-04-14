import React from 'react';
import ReactDOM from 'react-dom';

import Index from './index';
import AdminNavbar from './common/admin_navbar';
import CampaignsContainer from './components/campaigns/campaign_index';

const App = () => {
	return (
		<div className="wrapper">
			<CampaignsContainer />
		</div>
	);
};

export default App;
