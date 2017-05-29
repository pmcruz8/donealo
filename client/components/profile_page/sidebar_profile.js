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
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="business" value="donations@kcparkfriends.org"/>
                <input type="hidden" name="cmd" value="_donations"/>
                <input type="hidden" name="item_name" value="Dona por una causa"/>
                <input type="hidden" name="item_number" value="Donación"/>
                <input type="hidden" name="currency_code" value="USD"/>
                <input type="image" name="submit"
                  data-toggle="modal" 
                  data-target="#donateModal" 
                  className="btn donateIcons"
                  src="img/money-icon.png"
                  alt="Donate"/>
                <h5>Dinero</h5>
              </form>
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
