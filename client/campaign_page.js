import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/campaign_page/cp_header';
import Body from './components/campaign_page/cp_body';
import Navbar from './components/campaign_page/cp_nabvar';
import SideBar from './components/campaign_page/cp_sidebar';


//Create a new component. This component should produce some HTML
const App = () => {
	return (
		<div>
			<Body />
		</div>
	);
}

//Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
