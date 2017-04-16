import React, { Component } from 'react';

import { Campaigns } from '../../../collections/campaigns'; 
import { createContainer } from 'meteor/react-meteor-data'; 

class Container extends Component {
  render() {
    return (
      <CampaignList />
    ); 
  }
}

const CampaignList = (props) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <h3 className="page-header">Campañas Pasadas</h3>
          <div className="flex-grid">
          { props.pastData.map(item => <Box key={item._id} item={item}/>) }
          </div>
      </div>
    </div>
  );
};

const Box = (props) => {
  return (
    <div className="flex-col">
      <img src="https://placehold.it/250x250" />
      <p>{ props.item.title }</p>
    </div>
  ); 
}; 

export default PastCampaigns = createContainer (() => {
  
  // Subscribe to sub-collection -> "campaigns.past"
  // params: collectionName, userID
  const handle = Meteor.subscribe("campaigns.past", "2"); 
  const isReady = handle.ready(); 

  return {
    isReady,
    pastData: isReady ? Campaigns.find({type: 'past', userID: "2"}).fetch() : []
  }; 

}, CampaignList); 


