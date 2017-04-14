import Meteor from 'meteor/meteor'; 
import Campaigns from '../../imports/collections/campaigns'; 
import PrivateCampaigns from '../components/campaigns/admin_private_campaigns';

import { createContainer } from 'meteor/react-meteor-data'; 

export default createContainer(() => {
  Meteor.subscribe('campaigns.private', '1'); 

  return {campaigns: Campaigns.find({}).fetch() }; 
}, PrivateCampaigns); 