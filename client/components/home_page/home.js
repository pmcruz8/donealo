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
				<Navbar />
				<Header/>
			</div>
			<div className="row">
				<Sidebar/>
				<div className="col-sm-7 col-sm-offset-1 organazationsTable" id="organizaciones">
				  <div id="salud"><Orgs category="salud"/></div>
	        <div id="educacion"><Orgs category="educacion"/></div>
	        <div id="arte_cultura"><Orgs category="arte"/></div>
	        <div id="animales"><Orgs category="animales"/></div>
					<div id="ambiente"><Orgs category="ambiente"/></div>
	        <div id="familia"><Orgs category="familia"/></div>
				</div>
			</div>
    	<Footer/>
		</div>
	);
};

export default HomePage;
