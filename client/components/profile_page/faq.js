import React from 'react';

class FAQ extends React.Component {
  
  constructor() {
    super();
    this.state = {open: false}
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
  
  render() {
    return (
      <div>
        <button className="accordion" onClick={this.toggle}>
        	Lorem Ipsum
        </button>
        <div className={"collapse" + (this.state.open ? ' in' : '')}>
        	<div className="answers">
          		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
         	</div>
        </div>


      </div>


 
    );
  }
} 

export default FAQ;