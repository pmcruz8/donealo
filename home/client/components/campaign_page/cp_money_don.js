import React, { Component } from 'react';

class Money extends Component {
  render() {
    return (

      <div className="col-xs-4">
      <img src="../../public/img/money-icon.png" />
        <h5>Monetario</h5>

         <div className="modal fade" id="donateModal" tabIndex="-1" role="dialog">
           <div className="modal-dialog" role="document">
             <div className="modal-content">
                 <section className="col-md-12" id="giveForm">
               <h3 className="donateModal-headers">Haz una donación para</h3>
               <h2 className="donateModal-headers">Puerto Rico Sunshine 15k</h2>
                <form action="form">
                   <div className="col-md-20">
                     <label>Nombre de la campaña</label>
                     <input className="form-control"
                       type="number"
                       id="custom-donation-amount"
                       placeholder="50.00"
                       min="0"
                       step="10.00"/>
                   </div>
                 </form>
             </section>
             <div className="modal-footer">
             <center>
             <button type="button" id="donateMoney" className="btn btn-create-campaign" data-dismiss="modal">Submit</button>
             </center>
           </div>
         </div>
                 <section className="col-md-12" id="donationForm">

                 </section>
               <div className="modal-footer">
                 <button type="button" className="btn btn-default">Close</button>
               </div>
           </div>
         </div>
        </div>
    );
  }
}

export default Money;
