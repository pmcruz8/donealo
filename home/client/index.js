import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import CampaignPage from './components/campaign_page/campaign_page';
import Money from './components/campaign_page/cp_money_don';
import Time from './components/campaign_page/cp_time_don';
import materials from './components/campaign_page/cp_material_don';
import SearchBar from './components/home_page/search_bar';
import App from './app';

const Index = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={App}/>
        <Route exact path="/campaign" component={CampaignPage}/>
        <Route path="/donations" component={Money}/>
        <Route path="/volunteers" component={Time}/>
        <Route path="/materials" component={materials}/>
        <Route path="/search_bar" component={SearchBar}/>

      </div>
    </Router>
  );
};

export default Index;
