import React, {Component} from 'react';
import { Organizations } from '../../../collections/organizations';
import {Modal, Button} from 'react-bootstrap';

class SidebarProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModalRecursos:false,
      showModalTiempo: false, 
      paypal: ""
    }

    this.closeRecursos = this.closeRecursos.bind(this);
    this.openRecursos = this.openRecursos.bind(this);
    this.closeTiempo = this.closeTiempo.bind(this);
    this.openTiempo = this.openTiempo.bind(this);

  }

  getInitialState() {
    return {showModalRecursos: false,showModalTiempo:false};
  }

  closeRecursos() {
    this.setState({showModalRecursos: false});
  }

  openRecursos() {
    this.setState({showModalRecursos: true});
  }

  closeTiempo() {
    this.setState({showModalTiempo: false});
  }

  openTiempo() {
    this.setState({showModalTiempo: true});
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
                  value={this.state.paypal !== "" ? this.state.paypal : ""}/>
                <input type="hidden" name="cmd" value="_donations"/>
                <input type="hidden" name="item_name" value="Dona por una causa"/>
                <input type="hidden" name="item_number" value="Donation"/>
                <input type="hidden" name="currency_code" value="USD"/>
                <input type="image" name="submit" data-toggle="modal" data-target="#donateModal" className="btn donateIcons" src="img/money-icon.png" alt="Donate"/>
                <h5>Dinero</h5>
              </form>
            </div>
          </div>
          <div className="col-xs-4">
            <img type="button" className="btn donateIcons" src="img/give-icon.png" alt="" onClick={this.openRecursos}/>
            <h5>Recursos</h5>
          </div>

          <div className="col-xs-4">
            <img type="button" data-toggle="modal" data-target="#timeModal" className="btn donateIcons" src="img/time-icon.png" alt="" onClick={this.openTiempo}/>
            <h5>Tiempo</h5>
          </div>
        </center>
      
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

        <Modal show={this.state.showModalRecursos} onHide={this.closeRecursos}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3 className="text-center">Dona Recursos</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form action="form">
                <div className="col-md-12 m30">
                  <label>Artículos</label><br />
                  <textarea className="input100" name="articles" rows="5"></textarea>
                </div>
                <div className="col-md-6 m30">
                  <label>First Name</label><br />
                  <input className="input100"  type="text" name="firstname" />
                </div>
                <div className="col-md-6 m30">
                  <label>Last Name</label><br />
                  <input className="input100"  type="text" name="lastname" />
                </div>
                <div className="col-md-6 m30">
                  <label>Telephone</label><br />
                  <input className="input100"  type="text" name="telephone" />
                </div>
                <div className="col-md-6 m30">
                  <label>Email</label><br />
                  <input className="input100"  type="text" name="email" />
                </div>
                <input type="submit" value="Submit" />
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeRecursos}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showModalTiempo} onHide={this.closeTiempo}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3 className="text-center">Dona Tiempo</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form action="form">
                <div className="col-md-12 m30">
                  <label>Horario Disponible</label><br />
                  <input className="input100" name="horario"></input>
                </div>
                <div className="col-md-6 m30">
                  <label>First Name</label><br />
                  <input className="input100"  type="text" name="firstname" />
                </div>
                <div className="col-md-6 m30">
                  <label>Last Name</label><br />
                  <input className="input100"  type="text" name="lastname" />
                </div>
                <div className="col-md-6 m30">
                  <label>Telephone</label><br />
                  <input className="input100"  type="text" name="telephone" />
                </div>
                <div className="col-md-6 m30">
                  <label>Email</label><br />
                  <input className="input100"  type="text" name="email" />
                </div>
                <input type="submit" value="Submit" />
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeTiempo}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  };
};

export default SidebarProfile;
