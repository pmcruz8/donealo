import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="bg-dark text-center login-container">
      <div className="text-center">
        <img className="login-logo" src="../../../img/logo.png" />
      </div>
      <div className="login-form-container">
        <form className="form-horizontal">
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
            <div className="col-md-12 margin-top-10">
              <button type="submit" className="btn btn-success full-width">Login</button>
            </div>
            <div className="col-md-12 margin-top-10">
              <Link to="/registro"><a className="">Crear Cuenta</a></Link>
            </div>
            <div className="col-md-12 margin-top-10">
              <a className="grey">Se me olvidó mi contraseña</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
