import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import AdminNavbar from '../../common/admin_navbar';
import CreateCampaignStep1 from './campaign_create_step1';
import CreateCampaignStep2 from './campaign_create_step2';
import CreateCampaignStep3 from './campaign_create_step3';

class CreateCampaign extends Component {
  render() {
    return (
      <div className="wrapper">
        <AdminNavbar />
      </div>
    );
  }
}

export default CreateCampaign;
