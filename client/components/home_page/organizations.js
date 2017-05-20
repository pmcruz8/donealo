import React, { Component } from 'react';

import { Organizations } from '../../../collections/organizations';
import { createContainer } from 'meteor/react-meteor-data';

class Container extends Component {
  render() {
    return (
        <OrganizationList />
    );
  }
}

const OrganizationList = (props) => {
  return (
    <div className="row">
      <div className="text-center">
        <h2 className= "category-text">{ props.category }</h2>
        { props.activeData.map(item =>
          <Box key={item._id} item={item}/>)
        }
      </div>
    </div>
  );
};

const Box = (props) => {
  return (
    <div className="col-sm-3">
      <div className="blog-column">
        <p>{ props.item.name }</p>
        <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
      </div>
    </div>
  );
};

export default Orgs = createContainer(({ category }) => {
  // Subscribe to sub-collection -> "organization"
  // params: collectionName, category

  const handle = Meteor.subscribe("organizations");
  const isReady = handle.ready();

  return {
    isReady,
    activeData: isReady ? Organizations.find({category: category}).fetch() : [],
    category: category.substr(0,1).toUpperCase() + category.substr(1)
  };

}, OrganizationList);
