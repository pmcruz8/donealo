import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Accounts, STATES } from 'meteor/std:accounts-ui';

import App from './app';
import DonationContainer from './components/donations/donation_index';
import VolunteersContainer from './components/volunteers/volunteers_index';
import ArticlesContainer from './components/articles/articles_index';
import CreateCampaign from './components/campaigns/campaign_create';
import CreateCampaignStep1 from './components/campaigns/campaign_create_step1';
import CreateCampaignStep2 from './components/campaigns/campaign_create_step2';
import CreateCampaignStep3 from './components/campaigns/campaign_create_step3';

// Routes
const Index = () => {
  return (
    <Router>
      <div>
        <Route path="/signin" component={() => <Accounts.ui.LoginForm />} />
        <Route path="/signup" component={() => <Accounts.ui.LoginForm formState={STATES.SIGN_UP} />} />
        <Route exact path="/" component={App}/>
        <Route path="/create" component={CreateCampaign}/>
        <Route path="/donations" component={DonationContainer}/>
        <Route path="/volunteers" component={VolunteersContainer}/>
        <Route path="/articles" component={ArticlesContainer}/>
      </div>
    </Router>
  );
};

export default Index;
