import React, { Component } from 'react';

import CreateCampaignStep1 from './create_campaign_step1';
import CreateCampaignStep2 from './create_campaign_step2';
import CreateCampaignStep3 from './create_campaign_step3';

class CreateCampaign extends Component {
  render() {
    return (
      <div>
        <CreateCampaignStep1 />
        <CreateCampaignStep2 />
        <CreateCampaignStep3 />
      </div>
    );
  }
}

export default CreateCampaign;
