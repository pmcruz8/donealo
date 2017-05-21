import React from 'react';

const Footer = () => {

	return(

<div className="col-md-12" className="footer border" id="footer">
	<div className="sobreText">
	  <h2>Sobre nosotros</h2>
	  <p>Somos unos estudiantes motivados por comida gratis y mucha cafeína.</p>
	</div>
    <div className="row">
      <h4 className="footer-text">APOYADA POR</h4>
      <div className="col-sm-12 col-sm-offset-3">
            <div className="col-sm-2">
              <div className="blog-column">
                <a href="https://www.fundacionbancopopular.org/" target="_blank">
                  <img className="footImg" src="img/Fundacion.jpeg"  alt=""></img>
                </a>
              </div>
            </div>
            <div className="col-sm-1">
              <div className="blog-column">
                <a href="http://www.hackeaporunacausa.com/" target="_blank">
                  <img className="footImg" src="img/hackeaporunacausa.png" alt=""></img>
                </a>
              </div>
            </div>
            <div className="col-sm-1">
              <div className="blog-column">
                <a href="https://www.fundacionbancopopular.org/en/new-office/" target="_blank">
                  <img className="footImg" src="img/ccis.jpg" style={{"height": "100px", "paddingBottom":"40px", "paddingLeft": "10px"}} alt=""></img>
                </a>
              </div>
            </div>
            <div className="col-sm-1">
              <div className="blog-column">
                <a href="https://www.facebook.com/pg/includeGirls/about/?ref=page_internal" target="_blank">
                  <img className="footImg" src="img/big_logo.png" style={{"height": "40px", "paddingLeft": "10px"}} alt=""></img>
                </a>
              </div>
            </div>
          </div>

    </div>
  </div>

);

}

export default Footer;
