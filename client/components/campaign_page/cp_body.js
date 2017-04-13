import React, { Component } from 'react';

class Body extends Component {
  //do we need a constructor?
  constructor(props){
    super(props);

    this.state = { term: ' ' };
  }

    render(){
      return (
        <div>
        //here goes body...
        </div>
      );
    }
}

export default Body;
