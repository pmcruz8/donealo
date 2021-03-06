import React, { Component } from "react";
// import Navbar from './navbar'
import Navbar from "../home_page/navigation_bar";
import { Tracker } from 'meteor/tracker';
import { Organizations } from "../../../collections/organizations";
import { createContainer } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
//For center use bootstrap className: "text-center"

class Container extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <HeaderMap />;
	}
}

const HeaderMap = props => {
	return (
		<div>
			{props.activeData.map(item => (
				<Header key={item._id} item={item} />
			))}
		</div>
	);
};

const Header = props => {
	return (
		<div>
			<div className="profHeader">
				<Navbar />
				<div className="orgName">{props.item.name}</div>
					<img className="blog-img" 
            src={props.item.avatar !== "" ? props.item.avatar : "img/org-placeholder.png"} 
            alt="" />
			</div>
		</div>
	);
};

export default (HeaderProf = createContainer(({ id }) => {
	const handle = Meteor.subscribe("organizations");
	const isReady = handle.ready();

	return {
		isReady,
		activeData: isReady ? Organizations.find({ _id: id }).fetch() : []
	};
}, HeaderMap));
