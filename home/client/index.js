import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import campaign_page from './campaign_page';
import Money from './components/campaign_page/cp_money_don';
import Time from './components/volunteers/cp_time_don';
import material from './components/articles/cp_material_don';

const Index = () => {
  return (
    <Router>
      <div>
        <Route exact path="/campaign" component={campaign_page}/>
        <Route path="/donations" component={Money}/>
        <Route path="/volunteers" component={Time}/>
        <Route path="/materials" component={material}/>
      </div>
    </Router>
  );
};

export default Index;
