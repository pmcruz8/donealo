import React from 'react';

const PrivateCampaigns = (props) => {
  console.log(props.campaigns); 
  return (
    <div className="row">
        <div className="col-md-12">
            <h3 className="page-header">Campañas Privadas</h3>
            <div className="flex-grid">
              <div className="flex-col">
                <img src="https://placehold.it/250x250" />
              </div>
            </div>
        </div>
    </div>
  );
};

export default PrivateCampaigns; 


