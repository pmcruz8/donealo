import React from 'react';

const Sidebar = () =>{

  return(
    <div className="categorias">
      <div className="col-sm-3 homeSidebar">

          <div className="row">
            <div className="col-xs-offset-2 col-xs-10 ">
              <button className="buttonCategory" type="button" className="btn btn-block btn-default btn-lg">
                <span className="btnContent">
                  <img className= "btnImg" src="img/salud icon.png"></img> Salud
                </span>
              </button>
            </div>
            </div>
            <div className="row">
            <div className="col-xs-offset-2 col-xs-10">
              <button className="buttonCategory" type="button" className="btn btn-block btn-default btn-lg">
                <span className="btnContent">
                  <img className= "btnImg" src="img/edu icon.png"></img>Educación
                </span>
              </button>
            </div>
            </div>

            <div className="row">
            <div className="col-xs-offset-2 col-xs-10">
              <button className="buttonCategory" type="button" className="btn btn-block btn-default btn-lg">
                <span className="btnContent">
                  <img className= "btnImg" src="img/arte y cultura icon.png" ></img>  Arte y cultura
                </span>
              </button>
            </div>
            </div>

            <div className="row">
            <div className="col-xs-offset-2 col-xs-10">
          <button className="buttonCategory" type="button" className="btn btn-block btn-default btn-lg">
            <span className="btnContent">
              <img className= "btnImg" src="img/salud icon.png" ></img>  Animales
            </span>
          </button>
        </div>
        </div>

        <div className="row">
        <div className="col-xs-offset-2 col-xs-10">
          <button className="buttonCategory" type="button" className="btn btn-block btn-default btn-lg">
            <span className="btnContent">
              <img className= "btnImg" src="img/edu icon.png" ></img>  Medio Ambiente
            </span>
          </button>
        </div>
        </div>

        <div className="row">
        <div className="col-xs-offset-2 col-xs-10">
          <button className="buttonCategory" type="button" className="btn btn-block btn-default btn-lg">
            <span className="btnContent">
              <img className= "btnImg" src="img/familia icon.png" ></img> Familia
            </span>
          </button>
        </div>

        </div>

      </div>
      </div>
);
}

export default Sidebar;
