import React from 'react';
import Navbar from './navigation_bar';
import Sidebar from './sidebar';
import Orgs from './organizations';
import Footer from './home_footer';

const HomePage = () => {
	return (
		<div className="background borders">
			<Navbar/>
			<div className="row">
				<Sidebar/>
				<Orgs/>
			</div>
    	<Footer/>
		</div>
	);
};

export default HomePage;
