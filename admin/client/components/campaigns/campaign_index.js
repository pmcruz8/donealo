import React from 'react';
import { Link } from 'react-router-dom'

import AdminNavbar from '../../common/admin_navbar';
import ActiveCampaigns from './campaign_lists_active';
import PrivateCampaigns from './campaign_lists_private';
import PastCampaigns from './campaign_lists_past';

const CampaignsContainer = () => {
  return (
    <div className="page-wrapper">

      <AdminNavbar />

      <div className="pull-right">
        <Link to="/create/1"><button className="btn btn-success">Nueva Campaña</button></Link>
      </div>

      <div className="container-fluid">
        <ActiveCampaigns />
        <PrivateCampaigns />
        <PastCampaigns />
      </div>

    </div>
  );
};

export default CampaignsContainer;
