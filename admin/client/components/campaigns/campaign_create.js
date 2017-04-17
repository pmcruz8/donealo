import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import AdminNavbar from '../../common/admin_navbar';
import CreateCampaignStep1 from './campaign_create_step1';
import CreateCampaignStep2 from './campaign_create_step2';
import CreateCampaignStep3 from './campaign_create_step3';

var fieldValues = {
  goal     : null,
  title    : null,
  category : null,
  datetime : null,
  about    : null,
  photoURL : null
}

class CreateCampaign extends Component {
  constructor(props) {
    super(props); 

    this.saveValues = this.saveValues.bind(this); 
    this.nextStep = this.nextStep.bind(this); 
    this.previousStep = this.previousStep.bind(this); 

    this.state = {
      step : 1
    };
  }

  saveValues(fieldValue) {
    return (
      fieldValues = Object.assign({}, fieldValues, fieldValue)
    ); 
  }

  nextStep() {
    this.setState({
      step : this.state.step + 1
    }); 
  }

  previousStep() {
    this.setState({
      step : this.state.step - 1
    }); 
  }

  publishCampaign() {
    this.nextStep(); 
  }

  showStep() {
    switch (this.state.step) {
      case 1:
        return <CreateCampaignStep1 fieldValues={fieldValues}
                                    nextStep={this.nextStep}
                                    previousStep={this.previousStep}
                                    saveValues={this.saveValues} />
      case 2:
        return <CreateCampaignStep2 fieldValues={fieldValues}
                                    previousStep={this.previousStep}
                                    saveValues={this.saveValues}
                                    publishCampaign={this.nextStep} />
      case 3:
        return <CreateCampaignStep3 fieldValues={fieldValues} />
    }
  }

  render() {
    return (
      <main>
        <span className="progress-step">Step {this.state.step}</span>
        {this.showStep()}
      </main>
    );
  }
}

export default CreateCampaign;
