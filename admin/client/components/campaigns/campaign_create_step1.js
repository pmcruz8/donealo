import ReactDOM from 'react-dom'; 
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {browserHistory} from 'react-router';

import AdminNavbar from '../../common/admin_navbar';

class CreateCampaignStep1 extends Component {
  constructor(props) {
    super(props); 

    this.onContinue = this.onContinue.bind(this); 
  }

  onContinue(e) {
    e.preventDefault(); 

    // Get values via this.refs
    var data = {
      goal  : this.refs.goal.value,
      title : this.refs.title.value,
      category : this.refs.category.value,
      datetime : this.refs.datetime.value
    }

    this.props.saveValues(data); 
    this.props.nextStep(); 
  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
        <form>
          <div className="form-group">
            <label>Cantidad</label>
            <input ref="goal" className="form-control" />
            <label>Título</label>
            <input ref="title" className="form-control" />
            <label>Categoría</label>
            <input ref="category" className="form-control" />
            <label>Fecha y Hora</label>
            <input ref="datetime" className="form-control" />
          </div>
          <div className="text-danger"></div>
          <div className="text-center">
            <Link to="/create/2"><button onClick={this.onContinue} className="btn btn-primary">Continuar</button></Link>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default CreateCampaignStep1;
