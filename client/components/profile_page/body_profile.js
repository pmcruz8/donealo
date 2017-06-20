import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HeaderProf from './header_profile';
import SidebarProfile from './sidebar_profile';
import { Alert, Accordion, Panel } from 'react-bootstrap';
import { Organizations } from '../../../collections/organizations';
import { createContainer } from 'meteor/react-meteor-data';

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
        					<p>{props.item.paypal}</p>
        				
                <h4 className="subtitle">Teléfono de ATH-Móvil</h4>
        					<p>{props.item.phone}</p>

        				<h4 className="subtitle">Dirección Postal</h4>
        					<p>{props.item.postal}</p>

        				<h4 className="subtitle">Categoría</h4>
        					<p>{props.item.category}</p>
        			</div>

        		</div>
        		<div className="FAQ" id="FAQ">
        		<h3 className="profileTitle">Preguntas Frecuentes</h3>
		        	<Accordion>
					      <Panel header="¿Para qué usaremos las donaciones monetarias?" eventKey="1">
					        {props.item.A1}
					      </Panel>
					      <Panel header="¿Cuáles han sido los logros más grandes de su organización?" eventKey="2">
      					  {props.item.A2}	
    					  </Panel>
    					  <Panel header="¿De qué otra forma puedo ayudar, si no puedo donar dinero?" eventKey="3">
      					  {props.item.A3}
		        		</Panel>
		        	 </Accordion>
		        </div>
            {/*<div id="gallery">
            	<h3 className="profileTitle">Galería</h3>
            		<div className="row profilePhoto">
            			<div className="col-md-4">
            				<div className="blog-column">
            					<img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
            				</div>
            			</div>

            			<div className="col-md-4">
            				<div className="blog-column">
            					<img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
            				</div>
            			</div>

            			<div className="col-md-4">
            				<div className="blog-column">
            					<img className="img-responsive blog-img" src="img/org-placeholder.png" alt=""></img>
            				</div>
            			</div>
            		</div>
            </div>*/}
          </div>
			 	<div className="col-md-4">
			     	<SidebarProfile paypalEmail={props.item.paypal}/>
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
    activeData: isReady ? Organizations.find({_id: id}).fetch() : []
  };

}, BodyMap);

