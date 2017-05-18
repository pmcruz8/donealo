import React from 'react';

const Header = () =>{

  return(
    <div className="mainHeader">
      <h1 className=" homeTitle">Dona por una causa</h1>
      <h3 className=" homeSubtitle">Apoya organizaciones sin fines de lucro de Puerto Rico</h3>
      <a href="#organizaciones">
      <button className="button mainButton">
        Ver Organizaciones
      </button>
      </a>
    </div>


  );
  }

  export default Header;
