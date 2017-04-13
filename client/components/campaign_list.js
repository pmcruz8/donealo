import Rect from 'react'; 
import { createContainer } from 'meteor/react-meteor-data'; 
import { Campaigns } from '../../imports/collections/campaigns'; 

const CampaignList = (props) => {
	// props.campaigns

	return (
		<div>
			<div className="campaign-list">
				Campaign List
			</div>
		</div>
	); 
}; 


export default createContainer(() => {
	// Set up subscription
	Meteor.subscribe('campaigns');

	// Return object to use it as props
	return { campaigns: Campaigns.find({}).fetch() }; 

}, CampaignList); 