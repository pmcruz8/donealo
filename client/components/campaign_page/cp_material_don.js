import React, { Component }  from 'react';

class Material extends Component {
  render() {
    return (
      <div className="col-xs-4">
      <img src="../../public/img/give-icon.png" />
        <h5>Artículos</h5>
        <div className="modal fade" id="giveModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
              <section className="col-md-12" id="giveForm">
                <h3 className="donateModal-headers">Haz una donación para</h3>
                <h2 className="donateModal-headers">Puerto Rico Sunshine 15K</h2>
                <form action="form">
                  <div className="col-md-12 m30">
                    <label>Artículos</label>
                    <textarea className="input100" name="articles" rows="5"></textarea>
                  </div>
                  <div className="col-md-6 m30">
                    <label>First Name</label>
                    <input className="input100"  type="text" name="firstname"/>
                  </div>
                  <div className="col-md-6 m30">
                    <label>Last Name</label>
                    <input className="input100"  type="text" name="lastname"/>
                  </div>
                  <div className="col-md-6 m30">
                    <label>Telephone</label>
                    <input className="input100"  type="text" name="telephone"/>
                  </div>
                  <div className="col-md-6 m30">
                    <label>Email</label>
                    <input className="input100"  type="text" name="email"/>
                  </div>
                </form>
              </section>
            <div className="modal-footer">
              <center>
              <button type="button" style={{marginTop: 40}} className="btn btn-create-campaign">Submit</button>
            </center>
            </div>
        </div>
      </div>
      </div>
      //
    </div>
  );
}
}
export default Material;
