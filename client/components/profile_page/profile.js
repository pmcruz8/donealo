import React from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import HeaderProf from './header_profile';
import BodyProfile from './body_profile';
import SidebarProfile from './sidebar_profile'
import Footer from '../home_page/home_footer';

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

const Profile = ({match}) => {

	// To do: {history.replace({})} Use this to replace id in URL to org name

	return (
		<div>
			<HeaderProf id={match.params.id}/>
			<BodyProfile id={match.params.id}/>
		</div>
	);
};

// id's represent organizations in database. If /profile doesn't render, replace
// the ids above with ids in your local mongo db
	// open a new tab in terminal
	// enter: "meteor mongo"
	// then enter: "db.organizations.find()"

export default Profile;
