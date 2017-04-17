import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'; 
import { Link } from 'react-router-dom'

class CreateCampaignStep2 extends Component {
  constructor(props) {
    super(props); 

    this.onPublish = this.onPublish.bind(this); 
  }

  onPublish(e) {
    e.preventDefault(); 

    // Get values via this.refs
    var data = {
      about  : this.refs.about.value,
      photoURL : this.refs.photoURL.value
    }

    this.props.saveValues(data); 
    this.props.publishCampaign(); 
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
        <form >
          <div className="form-group">
            
            <label>Descripción</label>
              <textarea rows = "6" className = "form-control" ref = "about" />
            
            <label>Photo URL</label>
              <input className = "form-control" ref = "photoURL" />

          </div>
          
          <div className="text-danger"></div>
          
          <div className="col-xs-6">
            <Link to="/create/1" className="pull-left">Volver a editar</Link>
          </div>

          <div className="col-xs-6">
            <Link to="/create/3" onClick={this.onPublish} className="btn btn-success pull-right">Publicar</Link>
          </div>

        </form>
      </div>
    );
  }
}

export default CreateCampaignStep2;
