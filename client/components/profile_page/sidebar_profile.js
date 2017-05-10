import React from 'react';

// import Navbar from './navbar';
// import Sidebar from './sidebar_profile';

const SidebarProfile = () => {
  return (
    <div>
   
        <center>
          <h3>Escoge el tipo de donación</h3>
          <div className="row">
            <div className="col-xs-4">
              <img id="donateMoney" type="button" className="btn donateIcons" src="img/money-icon.png" alt=""/>
              <h5>Monetario</h5>
            </div>
            <div className="col-xs-4">
              <img type="button" data-toggle="modal" data-target="#giveModal" className="btn donateIcons" src="img/give-icon.png" alt=""/>
              <h5>Artículos</h5>
            </div>
            <div className="col-xs-4">
              <img type="button" data-toggle="modal" data-target="#timeModal" className="btn donateIcons" src="img/time-icon.png" alt=""/>
              <h5>Tiempo</h5>
            </div>
          </div>

          <div className="shareRow">
            <h3>Compártelo en las redes sociales</h3>
            <img src="img/share-icons.png" className="shareIcons" alt=""/>
          </div>

      </center>
      </div>
  );
};

export default SidebarProfile;