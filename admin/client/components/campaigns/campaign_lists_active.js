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
        <h3 className="page-header">Campañas Activas</h3>
          <div className="flex-grid">
            { props.activeData.map(item => <Box key={item._id} item={item}/>) }
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

export default ActiveCampaigns = createContainer (() => {
  
  // Subscribe to sub-collection -> "campaigns.active"
  // params: collectionName, userID
  const handle = Meteor.subscribe("campaigns.active", "1"); 
  const isReady = handle.ready(); 

  return {
    isReady,
    activeData: isReady ? Campaigns.find({type: 'active', userID: "1"}).fetch() : []
  }; 

}, CampaignList); 


