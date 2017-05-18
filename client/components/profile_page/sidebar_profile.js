import React from 'react';

// import Navbar from './navbar';
// import Sidebar from './sidebar_profile';

const SidebarProfile = () => {
  return (
    <div className="profileSideBar">
   
        <center>
          <h4 className="sidebarText">Escoge el tipo de donación</h4>
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

          <div className="row">
            <h4 className="sidebarText">Compártelo en las redes sociales</h4>
            <div className="col-xs-3">
              <img src="img/FB.png" className="shareIcons" alt=""/>
            </div>
            <div className="col-xs-3">
              <img src="img/Twitter.png" className="shareIcons" alt=""/>
            </div>
            <div className="col-xs-3">
              <img src="img/WhatsApp.png" className="shareIcons" alt=""/>
            </div>
            <div className="col-xs-3">
              <img src="img/Email.png" className="shareIcons" alt=""/>
            </div>
          </div>

      </center>
      </div>
  );
};

export default SidebarProfile;