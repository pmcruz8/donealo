import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import Money from './components/campaign_page/cp_money_don';
import Time from './components/campaign_page/cp_time_don';
import materials from './components/campaign_page/cp_material_don';
import App from './app';
import Profile from './components/profile_page/profile';

const Index = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/donations" component={Money}/>
        <Route path="/volunteers" component={Time}/>
        <Route path="/materials" component={materials}/>
        <Route path="/profile" component={Profile}/>

      </div>
    </Router>
  );
};

export default Index;
