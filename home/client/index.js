import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import CampaignPage from './components/campaign_page/campaign_page';
import Money from './components/campaign_page/cp_money_don';
import Time from './components/campaign_page/cp_time_don';
import materials from './components/campaign_page/cp_material_don';

const Index = () => {
  return (
    <Router>
      <div>
        <Route exact path="/campaign" component={CampaignPage}/>
        <Route path="/donations" component={Money}/>
        <Route path="/volunteers" component={Time}/>
        <Route path="/materials" component={materials}/>
      </div>
    </Router>
  );
};

export default Index;
