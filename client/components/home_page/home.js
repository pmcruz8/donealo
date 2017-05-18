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
				<Orgs category="salud"/>
        <Orgs category="educacion"/>
        <Orgs category="arte"/>
        <Orgs category="animales"/>
        <Orgs category="familia"/>
			</div>
    	<Footer/>
		</div>
	);
};

export default HomePage;
