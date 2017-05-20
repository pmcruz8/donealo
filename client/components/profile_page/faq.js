import React from 'react';


function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="answers">
     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  );
}

class FAQ extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {showAnswers: false}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showAnswers: !prevState.showAnswers
    }));
  }
  
  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showAnswers} />
        <button className="accordion" onClick={this.handleToggleClick}>
          {this.state.showAnswers ? 'Lorem Ipsum' : 'Lorem Ipsum'}
        </button>
      </div>

      

    );
  }
}



export default FAQ;