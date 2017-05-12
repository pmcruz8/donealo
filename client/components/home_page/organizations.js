import React, {Component} from 'react';

class Orgs extends Component {
	constructor(props){
		super(props);

		this.state = {term:' '};
	}

	//function to render search bar
	render() {
		return(
    <div className="col-sm-7 col-sm-offset-1 organazationsTable" id="organizaciones">
      <div className="row" id="salud">
        <div className="text-center">
          <h2 className= "category-text">Salud</h2>
          <div className="col-sm-3 ">
            <div className="blog-column">
              <a href="campaign.html">
                <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
              </a>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="blog-column">
              <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="blog-column">
              <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="blog-column">
              <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
            </div>
          </div>
        </div>
      </div>

      <div className="row" id="educacion">
        <div className="text-center">
          <h2 className= "category-text">Educación</h2>
          <div className="col-sm-3">
            <div className="blog-column">
              <a href="campaign.html">
                <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
              </a>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="blog-column">
              <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="blog-column">
              <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="blog-column">
              <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
            </div>
          </div>
				</div>
      </div>

      <div className="row" id="arte_cultura">
        <div className="text-center">
            <h2 className= "category-text">Arte y Cultura</h2>
            <div className="col-sm-3">
              <div className="blog-column">
                <a href="campaign.html">
                  <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
                </a>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="blog-column">
                <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="blog-column">
                <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="blog-column">
                <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
              </div>
            </div>
        </div>
      </div>

      <div className="row" id="animales">
        <div className="text-center">
            <h2 className= "category-text">Animales</h2>
            <div className="col-sm-3">
              <div className="blog-column">
                <a href="campaign.html">
                  <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
                </a>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="blog-column">
                <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="blog-column">
                <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="blog-column">
                <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
              </div>
            </div>
        </div>
      </div>

      <div className="row" id="ambiente">
        <div className="text-center">
            <h2 className= "category-text">Medio Ambiente</h2>
            <div className="col-sm-3">
              <div className="blog-column">
                <a href="campaign.html">
                  <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
                </a>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="blog-column">
                <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="blog-column">
                <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="blog-column">
                <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
              </div>
            </div>
        </div>
      </div>

      <div className="row" id="familia">
        <div className="text-center">
            <h2 className= "category-text">Familia</h2>
            <div className="col-sm-3">
              <div className="blog-column">
                <a href="campaign.html">
                  <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
                </a>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="blog-column">
                <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="blog-column">
                <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="blog-column">
                <img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
              </div>
            </div>
        </div>
      </div>
    </div>
		);
	}
}

export default Orgs;
