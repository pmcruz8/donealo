import React from 'react';

class alert extends React.Component {
  
  getInitialState() {
    return {
      alertVisible: true
    };
  }

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow() {
    this.setState({alertVisible: true});
  }

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle="info" onDismiss={this.handleAlertDismiss}>
          <h4>Oh snap! You got an error!</h4>
          <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
        </Alert>     
        );
    }

    return (
      <Button onClick={this.handleAlertShow}>Show Alert</Button>
    );
  }
  
  }


export default alert;