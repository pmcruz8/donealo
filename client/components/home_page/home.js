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
				<div className="col-sm-7 col-sm-offset-1 organazationsTable" id="organizaciones">
					<Orgs category="salud"/>
	        <Orgs category="educacion"/>
	        <div id="arte_cultura"><Orgs category="arte"/></div>
	        <Orgs category="animales"/>
					<Orgs category="ambiente"/>
	        <Orgs category="familia"/>
				</div>
			</div>
    	<Footer/>
		</div>
	);
};

export default HomePage;
