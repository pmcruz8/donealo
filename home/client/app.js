import React from 'react';
import ReactDOM from 'react-dom';
import CampaignPage from './components/campaign_page/campaign_page';
import SearchBar from './components/home_page/search_bar';

const App = () => {
	return (
		<div className="wrapper">
      <CampaignPage />
      <SearchBar />
		</div>
	);
};

// ReactDOM.render(<App />, document.querySelector('.container'));
