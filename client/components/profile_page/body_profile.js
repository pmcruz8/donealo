import React, {Component} from 'react';
import HeaderProf from './header_profile';
// import Body from './body_profile';
// import Navbar from './navbar';
import SidebarProfile from './sidebar_profile';

class BodyProfile extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div> <section id="profileBody">
     			<div className="col-md-8 contactInfo">


        		<h2>Descripción de la organización</h2>
        			<p></p>

		        <h2>Información contacto</h2>
		        <h3>Dirección física</h3>
		        <h3>Teléfono</h3>

		        <h3>Categoría</h3>
		        	<p></p>

		        <h3>Eventos</h3>
		        	<h4></h4>
		        	<img />

		    </div>
			 	<div className="col-md-4 campaignSideBar">
			     	<SidebarProfile/>
			    </div>

		    </section>
						
			</div>
		);
	}
}

export default BodyProfile;