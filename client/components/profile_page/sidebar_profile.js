import React, {Component} from 'react';
import { Organizations } from '../../../collections/organizations';

class SidebarProfile extends Component {
  constructor(props) {
    super(props);   

    this.state = {paypal: ""}
    this.managePaypal = this.managePaypal.bind(this); 
  }

  componentDidMount() {
    const currUser = Meteor.userId();
    const handle = Meteor.subscribe('organization.user', currUser);
    
    Tracker.autorun(() => {
      const isReady = handle.ready();
      
      if (isReady) {
        const org_data = Organizations.findOne({user:currUser}); 
        this.setState({paypal: org_data.paypal !== "" || org_data.paypal !== undefined ? org_data.paypal : ""})
      }
    });
  }

  componentWillUnmount() {
    console.log("will unmount"); 
    if(this.state.paypal === "") {
      Bert.alert('Esta organización no ha configurado la opción de PayPal', 'danger'); 
    }
  }

  managePaypal() {
    if(this.state.paypal === "") {
      Bert.alert('Esta organización no ha configurado la opción de PayPal', 'danger'); 
    }
  }

  render() {
    return (
      <div className="profileSideBar">
        <center>
          <h4 className="sidebarText">Escoge el tipo de donación</h4>
          <div className="row">
            <div className="col-xs-4">
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
               <input type="hidden" 
                  name="business" 
                  onSubmit={this.managePaypal}
                  value={this.state.paypal !== "" ? this.state.paypal : ""}/>

                <input type="hidden" name="cmd" value="_donations"/>
                <input type="hidden" name="item_name" value="Dona por una causa"/>
                <input type="hidden" name="item_number" value="Donation"/>
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
  }
};

export default SidebarProfile;
