import React, { Component } from 'react';

import { Organizations } from '../../../collections/organizations';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

class Container extends Component {
  render() {
    return (
        <OrganizationList />
    );
  }
}

const OrganizationList = (props) => {
  if(props.count > 0) {
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
  } else {
    return (
      <div className="row">
      </div>
    );
  }
};

// To Do: add query for org name in Profile path

const Box = (props) => {
  return (
    <div className="col-sm-3">
      <div className="blog-column">
        <p>{ props.item.name }</p>
        <Link to={props.item._id}>
          <img className="img-responsive blog-img" 
            src={props.item.avatar !== "" ? props.item.avatar : "img/org-placeholder.png"}
            alt="">
          </img>
        </Link>
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
    activeData: isReady ? Organizations.find({category: category}).fetch() : [],
    count: isReady ? Organizations.find({category: category}).count() : 0,
    category: category.substr(0,1).toUpperCase() + category.substr(1)
  };

}, OrganizationList);
