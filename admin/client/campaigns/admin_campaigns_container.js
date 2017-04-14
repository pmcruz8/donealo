import React from 'react';

import ActiveCampaigns from './admin_active_campaigns';
import PrivateCampaigns from './admin_private_campaigns';
import InactiveCampaigns from './admin_inactive_campaigns';

const CampaignsContainer = () => {
  return (
    <div className="page-wrapper">

      <div className="pull-right">
        <button className="btn btn-primary">Nueva Campaña</button>
      </div>

      <div className="container-fluid">
        <ActiveCampaigns />
        <PrivateCampaigns />
        <InactiveCampaigns />
      </div>

    </div>
  );
};

export default CampaignsContainer;
