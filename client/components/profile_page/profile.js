import React from 'react';
import HeaderProf from './header_profile';
import BodyProfile from './body_profile';
import SidebarProfile from './sidebar_profile';
import Footer from '../home_page/home_footer';

const Profile = () => {
	return (
		<div>
			<HeaderProf id="PjsaWhS4tqkaQSpqg"/>
			<BodyProfile id="PjsaWhS4tqkaQSpqg"/>
		</div>
	);
};

// id's represent organizations in database. If /profile doesn't render, replace
// the ids above with ids in your local mongo db
	// open a new tab in terminal
	// enter: "meteor mongo"
	// then enter: "db.organizations.find()"

export default Profile;
