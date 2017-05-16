import React from 'react';
import Header from './header.js';
import Navbar from './navigation_bar';
import Sidebar from './sidebar';
import Orgs from './organizations';
import Footer from './home_footer';

const HomePage = () => {
	return (
		<div className="background borders">
		<div className="homePage">
				<Navbar/>
				<Header/>
			</div>
			<div className="row">
				<Sidebar/>
				<Orgs/>
			</div>
    	<Footer/>
		</div>
	);
};

export default HomePage;
