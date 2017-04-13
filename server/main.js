import { Meteor } from 'meteor/meteor';
import { Campaigns } from '../imports/collections/campaigns';

Meteor.startup(() => {
	const numberRecords = Campaigns.find({}).count();
	if (!numberRecords) {

		// Dummy Data
		Campaigns.insert({
			title: "15 K",
			goal: 25000,
			status: 5000,
			categories: ["salud"],
			imageURL: "",
			about: "Carrera de 15K a beneficio de los niños del Hospital X",
			type: "active",
			createdDate: "2017-04-08T09:02:21",
			endDate: "2017-05-08T09:07:20"
		});
	}

	Meteor.publish('campaigns', function() {
		return Campaigns.find({}, { limit: 20 });
	});
});
