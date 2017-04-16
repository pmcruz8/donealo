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
        <h3 className="page-header">Campañas Privadas</h3>
          <div className="flex-grid">
          { props.privateData.map(item => <Box key={item._id} item={item}/>) }
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

export default PrivateCampaigns = createContainer (() => {
  
  // Subscribe to sub-collection -> "campaigns.private"
  // params: collectionName, userID
  const handle = Meteor.subscribe("campaigns.private", "1"); 
  const isReady = handle.ready(); 

  return {
    isReady,
    privateData: isReady ? Campaigns.find({type: 'private', userID: "1"}).fetch() : []
  }; 

}, CampaignList); 


