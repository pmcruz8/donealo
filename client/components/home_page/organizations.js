import React, {Component} from 'react';

class Orgs extends Component {
	constructor(props){
		super(props);

		this.state = {term:' '};
	}

	//function to render search bar
	render() {
		return(
		<div className="organization">
		  <div className="section">
	        <div className="container">
	        	<div className="row">

			<div className="section-title">
				<h1>Organizaciones sin fines de Lucro</h1> 
			</div>

		
			<ul className="grid cs-style-3">
	        	<div className="col-md-4 col-md-6 ">
					<figure>
						<img className="campaignPhoto" src="/img/gray1.jpg" alt="" />
						<figcaption>
							<h3>Nombre</h3>
							<span>Descripción </span>
							<a href="">link</a>
						</figcaption>
					</figure>
	        	</div>

	        	<div className="col-md-4 col-md-6 ">
					<figure>
						<img className="campaignPhoto" src="/img/gray1.jpg" alt="" />
						<figcaption>
							<h3>Nombre</h3>
							<span>Descripción </span>
							<a href="">link</a>
						</figcaption>
					</figure>
	        	</div>	

	            <div className="col-md-4 col-md-6 ">
					<figure>
						<img className="campaignPhoto" src="/img/gray1.jpg" alt="" />
						<figcaption>
							<h3>Nombre</h3>
							<span>Descripción </span>
							<a href="">link</a>
						</figcaption>
					</figure>
	        	</div>
			</ul>

	        	</div>

	        </div>
	      </div>

		</div>
		);
	}
}

export default Orgs;