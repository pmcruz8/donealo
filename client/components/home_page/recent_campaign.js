import React, {Component} from 'react';
import { Campaigns } from '../../../collections/campaigns'; 
import { createContainer } from 'meteor/react-meteor-data'; 

// make class

class Container extends Component {
	//function to render search bar
	render() {
		return(
      <CampaignList />
    );
  } 
}

const CampaignList = (props) => {
  console.log('props: ' + props.activeData)
  return(
    <div className="recCampaign">
      <div className="section">
        <div className="container">
          <div className="row">

            <div className="section-title">
              <h1>Campañas Recientes</h1> 
            </div>    
           
            <ul className="grid cs-style-3">
              { props.activeData.map(item => <Box key={item._id} item={item}/>) }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}; 

const Box = (props) => {
  return (
    <div className="col-md-4 col-md-6 ">
      <figure>
        <img className="campaignPhoto" src="/img/gray1.jpg" alt="" />
        <figcaption>
          <h3>Título de Campaña</h3>
          <span>Descripción de campaña </span>
          <a href="">link</a>
        </figcaption>
      </figure>
    </div>  
  ); 
}; 

export default RecCampaign = createContainer (() => {
  
  // Subscribe to sub-collection -> "campaigns.active"
  // params: collectionName
  const handle = Meteor.subscribe("campaigns.active", "1"); 
  const isReady = handle.ready(); 

  return {
    isReady,
    activeData: isReady ? Campaigns.find({type: 'active', userID: "1"}).fetch() : []
  }; 

}, CampaignList); 
