import React from 'react';
import ReactDOM from 'react-dom';
import Header from './home_header';
// import OrgsCat from './organization_categories';
import RecCampaign from './recent_campaign';
import Orgs from './organizations';
import Footer from './home_footer';

const HomePage = () => {
	return (
		<div>
			<Header/>
			<RecCampaign />
			<Orgs/>
			<Footer />
		</div>
	);
};

export default HomePage;
