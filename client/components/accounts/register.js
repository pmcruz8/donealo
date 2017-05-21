import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="bg-dark text-center login-container">
      <div className="text-center">
        <Link to="/"><img className="login-logo" src="../../../img/logo.png" /></Link>
      </div>
      <div className="register-form-container">
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-md-12">
              <input type="text" className="form-control" id="inputName" placeholder="Nombre" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12">
              <input type="text" className="form-control" id="inputLastName" placeholder="Apellido" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12">
              <input type="text" className="form-control" id="inputOrg" placeholder="Organización" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12">
              <input type="text" className="form-control" id="inputAccessCode" placeholder="Código de Invitación" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12 margin-top-10">
              <button type="submit" className="btn btn-success full-width">Registrar</button>
            </div>
            <div className="col-md-12 margin-top-10">
              <Link to="/login">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
