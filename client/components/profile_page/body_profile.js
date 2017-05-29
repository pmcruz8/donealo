import React, {Component} from 'react';
import HeaderProf from './header_profile';
import {Alert, Accordion, Panel} from 'react-bootstrap';
import SidebarProfile from './sidebar_profile';
import { Organizations } from '../../../collections/organizations';
import { createContainer } from 'meteor/react-meteor-data';

// var Alert = ReactBootstrap.Alert;

class Container extends Component {
	constructor(props){
		super(props);
		this.state = {alertVisible: true}
		this.handleAlertDismiss = this.handleAlertDismiss.bind(this)
	}

	handleAlertDismiss() {
    this.setState({alertVisible: false});
  }
	render() {
		return (
			<BodyMap/>
		);
	}
}

const BodyMap = (props) => {
	return (
		<div>
		  {props.activeData.map(item => <Body key={item._id} item={item}/>)}
		</div>
	);
}

const Body = (props) => {
	return(
		<div> <section id="profileBody">
     			<div className="col-md-8 contactInfo">
     			<div className="profileMenu profileMenu">
	     			<div className="row">
		     			<div>
		     			   <div className="col-sm-2 profileItems">
		     			   	<a href="#aboutus" >Sobre Nosotros</a>
		     			   	</div>
		     			   	<div className="col-sm-2 profileItems">
		     			   		<a href="#contacts">Contáctanos</a>
		     			   	</div>
		     			   <div className="col-sm-2 profileItems">
		     			   		<a href="#FAQ" >Preguntas Frecuentes</a>
		     			   </div>
		     			   <div className="col-sm-2 profileItems">
		     			   		<a href="#gallery" >Galería</a>
		     			   </div>
		     			   <div className="col-sm-2 profileItems">
		     			   		<a href="#events" >Eventos</a>
		     			   	</div>

		     			</div>
	     			</div>
     			</div>

     			<div className="aboutUs" id="aboutus">
     				<h3 className="profileTitle">Sobre Nosotros </h3>        			
        			<div className="profileBox"> {props.item.about}</div>
        		</div>
        		<div className="contact" id="contacts">
        			<h3 className="profileTitle">Contáctanos</h3>
        			<div className="profileBox">
        				
                <h4 className="subtitle">Correo Electrónico</h4>
        					<p>{props.item.email}</p>
        				
                <h4 className="subtitle">Teléfono de ATH-Móvil</h4>
        					<p>{props.item.phone}</p>

        				<h4 className="subtitle">Dirección Física</h4>
        					<p>{props.item.postal}</p>

        				<h4 className="subtitle">Categoría</h4>
        					<p>{props.item.category}</p>
        			</div>

        		</div>
        		<div className="FAQ" id="FAQ">
        			
        			<h3 className="profileTitle">Preguntas Frecuentes</h3>
		        	<Alert bsStyle="info" onDismiss={this.handleAlertDismiss}>
			          <h4>Pregunta Sugerida: </h4>
			          <p>¿Para que usaremos las donaciones monetarias?</p>
				    </Alert>
		        	 <Accordion>
					    <Panel header="Pregunta 1" eventKey="1">
					    </Panel>
					    <Panel header="Pregunta 2" eventKey="2">
    					</Panel>
    					<Panel header="Pregunta 3" eventKey="3">
    					</Panel>
					  </Accordion>  
		        </div>
		        
		        
		        <div id="gallery">
		        	<h3 className="profileTitle">Galería</h3>
		        		<div className="row profilePhoto">
		        			<div className="col-md-4">
		        				<div className="blog-column">
		        					<img className="img-responsive" src="img/photo_card.png" alt=""></img>
		        				</div>
		        			</div>

		        			<div className="col-md-4">
		        				<div className="blog-column">
		        					<img className="img-responsive blog-img" src="img/photo_card.png" alt=""></img>
		        				</div>
		        			</div>

		        			<div className="col-md-4">
		        				<div className="blog-column">
		        					<img className="img-responsive blog-img" src="img/photo_card.png" alt=""></img>
		        				</div>
		        			</div>
		        		</div>

		        		<div className="row profilePhoto">
		        			<div className="col-md-4">
		        				<div className="blog-column">
		        					<img className="img-responsive" src="img/video_vard.png" alt=""></img>
		        				</div>
		        			</div>

		        			<div className="col-md-4">
		        				<div className="blog-column">
		        					<img className="img-responsive blog-img" src="img/video_vard.png" alt=""></img>
		        				</div>
		        			</div>

		        			<div className="col-md-4">
		        				<div className="blog-column">
		        					<img className="img-responsive blog-img" src="img/video_vard.png" alt=""></img>
		        				</div>
		        			</div>
		        		</div>
		        </div>
		        
		        <div id="events">
		        	<h3 className="profileTitle">Eventos</h3>
		        	<div className="row profilePhoto">
		        			<div className="col-md-4">
		        				<div className="blog-column">
		        					<img className="img-responsive" src="img/evento_card.png" alt=""></img>
		        				</div>
		        			</div>

		        			<div className="col-md-4">
		        				<div className="blog-column">
		        					<img className="img-responsive blog-img" src="img/evento_card.png" alt=""></img>
		        				</div>
		        			</div>

		        			<div className="col-md-4">
		        				<div className="blog-column">
		        					<img className="img-responsive blog-img" src="img/evento_card.png" alt=""></img>
		        				</div>
		        			</div>
		        		</div>
		        </div>
		    

		    </div>

			 	<div className="col-md-4">
			     	<SidebarProfile/>
			    </div>
		    </section>
			</div>
		);
}

export default BodyProfile = createContainer(({id}) => {
  const handle = Meteor.subscribe("organizations");
  const isReady = handle.ready();

  return {
    isReady,
    activeData: isReady ? Organizations.find({_id: id}).fetch() : [],
  };

}, BodyMap);

