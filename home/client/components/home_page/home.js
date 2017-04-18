import React from 'react';
import ReactDOM from 'react-dom';
import Header from './home_header';
import Orgs from './organizations';
import OrgsCat from './organization_categories';
import RecCampaign from './recent_campaign';
import Footer from './home_footer';

const HomePage = () => {
	return (
		<div>
			<Header/>
			<RecCampaign />
			<Footer />
		</div>
	);
};

export default HomePage;
