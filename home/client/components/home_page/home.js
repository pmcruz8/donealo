import React from 'react';
import ReactDOM from 'react-dom';
import Header from './home_header';
import Navbar from './navigation_bar'
import SearchBar from './search_bar';
import Orgs from './organizations';
import OrgsCat from './organization_categories'
import Footer from './home_footer';

const HomePage = () => {
	return (
		<div>
			<Header />
			<Navbar />
			<SearchBar />
			<Orgs />
			<OrgsCat />
			<Footer />
		</div>
	);
};

export default HomePage;
