import React from 'react';

const Sidebar = () => {

  return (
    <div className="categorias">
      <div className="col-sm-3 homeSidebar">

        <div className="row">
          <div className="col-xs-offset-2 col-xs-10 ">
            <a href="#salud">
              <button className="buttonCategory" type="button" className="btn-block btn-default btn-lg btn">
                <span className="btnContent">
                  <img className="btnImg" src="img/salud-icon.png"></img>
                  Salud
                </span>
              </button>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-offset-2 col-xs-10">
            <button type="button" className="btn btn-block btn-default btn-lg">
              <a href="#educacion">
                <span className="btnContent">
                  <img className="btnImg" src="img/edu-icon.png"></img>Educación
                </span>
              </a>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-offset-2 col-xs-10">
            <button className="buttonCategory" type="button" className="btn btn-block btn-default btn-lg">
              <a href="#arte_cultura">
                <span className="btnContent">
                  <img className="btnImg" src="img/arte y cultura icon.png"></img>
                  Arte y cultura
                </span>
              </a>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-offset-2 col-xs-10">
            <button className="buttonCategory" type="button" className="btn btn-block btn-default btn-lg">
              <a href="#animales">
                <span className="btnContent">
                  <img className="btnImg" src="img/animales icon.png"></img>
                  Animales
                </span>
              </a>
            </button>
          </div>
        </div>

        <div className="row" id="ambiente">
          <div className="col-xs-offset-2 col-xs-10">
            <button className="buttonCategory" type="button" className="btn btn-block btn-default btn-lg">
              <a href="#ambiente">
                <span className="btnContent">
                  <img className="btnImg" src="img/medio ambiente icon.png"></img>
                  Medio Ambiente
                </span>
              </a>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-offset-2 col-xs-10">
            <button className="buttonCategory" type="button" className="btn btn-block btn-default btn-lg">
              <a href="#familia">
                <span className="btnContent">
                  <img className="btnImg" src="img/familia icon.png"></img>
                  Familia
                </span>
              </a>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Sidebar;
