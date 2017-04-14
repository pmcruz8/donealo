import React, { Component } from 'react';

class Time extends Component {
  render() {
    return (

      <div className="col-xs-4">
      <img src="../../public/img/time-icon.png" />
        <h5>Tiempo</h5>

      <div className="modal fade" id="timeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
              <section className="col-md-12" id="giveForm">
                <h3 className="donateModal-headers">Haz una donación para</h3>
                <h2 className="donateModal-headers">Puerto Rico Sunshine 15K</h2>
                <form action="form">
                  <div className="col-md-12 m30">
                    <label>Fecha(s) y horario(s) disponibles a donar</label>
                    <input className="input100"  type="text" name="date" ng-model="donation.time.date"/>
                  </div>
                  <div className="col-md-6 m30">
                    <label>First Name</label>
                    <input className="input100"  type="text" name="firstname" ng-model="donation.time.firstname"/>
                  </div>
                  <div className="col-md-6 m30">
                    <label>Last Name</label>
                    <input className="input100"  type="text" name="lastname" ng-model="donation.time.lastname"/>
                  </div>
                  <div className="col-md-6 m30">
                    <label>Telephone</label>
                    <input className="input100"  type="text" name="telephone" ng-model="donation.time.telephone"/>
                  </div>
                  <div className="col-md-6 m30">
                    <label>Email</label>
                    <input className="input100"  type="text" name="email" ng-model="donation.time.email"/>
                  </div>
                </form>
              </section>
            <div className="modal-footer">
              <center>
              <button type="button" style="margin-top:40px;" className="btn btn-create-campaign" data-dismiss="modal">Submit</button>
            </center>
            </div>
          </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Time;
