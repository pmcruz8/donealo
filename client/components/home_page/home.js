import React from 'react';
import Navbar from './navigation_bar';
import homeHeader from './home_header';
import Sidebar from './sidebar';
import Orgs from './organizations';
import Footer from './home_footer';

const HomePage = () => {
	return (
		<div className="app">

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
