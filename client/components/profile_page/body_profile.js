import React, {Component} from 'react';
import HeaderProf from './header_profile';
//import FAQ from './faq';
import SidebarProfile from './sidebar_profile';
import { Organizations } from '../../../collections/organizations';
import { createContainer } from 'meteor/react-meteor-data';


class Container extends Component {
	constructor(props){
		super(props);
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

        			{/*<p> {props.item.name} </p>*/}
        			
        			<div className="profileBox"> 
        			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices dictum ex, 
        			a condimentum justo convallis eu. Suspendisse efficitur tincidunt enim, vehicula pharetra arcu luctus sed. Integer placerat leo nisi, 
        			vel scelerisque nisl posuere eu. Proin sollicitudin mi ligula, nec volutpat dolor vulputate ut. Duis condimentum erat eros, vitae vestibulum 
        			mi condimentum at. Sed molestie enim ut lectus eleifend malesuada vitae sit amet tellus. Morbi pretium turpis libero. Sed facilisis, turpis 
        			eu accumsan rutrum, leo mauris suscipit mi, posuere venenatis lectus quam vitae nibh. Donec id sapien sed ligula lacinia dictum eget et enim. 
        			
        			Sed dictum erat quis tellus volutpat porttitor. Pellentesque aliquet nunc et feugiat congue. Nulla eget mattis arcu. Lorem ipsum dolor sit amet, 
        			consectetur adipiscing elit.
        			Praesent ac quam ut ante suscipit eleifend et quis libero. Nam porttitor nec neque eu scelerisque. Mauris nulla mi, fermentum in dolor at, iaculis 
        			bibendum lectus. 
        			Nulla sem orci, lobortis pretium diam quis, semper fringilla nibh. Phasellus in ullamcorper nisi. Nunc lobortis fermentum nulla. Nam congue, massa 
        			ac porttitor vulputate, tortor dolor tempor risus, at pharetra ante neque non ipsum. Aenean sollicitudin nibh ac diam condimentum vehicula.

                    Nunc dapibus tortor sit amet porttitor sollicitudin. Vestibulum eu feugiat nulla. Vestibulum dui quam, semper eget massa at, lacinia aliquet augue. 
                    Aenean sem diam, mollis sed magna id, tincidunt interdum mi. Nam tempor urna ut leo aliquet posuere. Proin et nisl augue. Integer a nibh tempus, 
                    faucibus mauris at, eleifend nunc. Maecenas urna quam, luctus vitae dolor blandit, lobortis ultrices ipsum. Sed ut ultricies elit, vitae eleifend enim. 
                    Praesent gravida, felis eget elementum laoreet, magna eros egestas quam, eget 
                    euismod nisi ex sed augue. Sed molestie vel risus at aliquam. Vestibulum a lorem eros. Pellentesque aliquam tincidunt sagittis. Quisque porttitor in arcu 
                    id convallis. Donec at mi vitae libero cursus malesuada nec vitae velit.
        			</div>
        		</div>
        		<div className="contact" id="contacts">
        			<h3 className="profileTitle">Contáctanos</h3>
        			<div className="profileBox">
        				<h4 className="subtitle">Correo Electrónico</h4>
        					<p>lorem@gmail.com</p>
        				<h4 className="subtitle">Teléfono</h4>
        					<p>1-111-1111</p>
        				<h4 className="subtitle">Dirección Física</h4>
        					<p>Lorem ipsum dolor sit amet</p>
        				<h4 className="subtitle">Dirección Física</h4>
        					<p>Lorem ipsum dolor sit amet</p>
        				<h4 className="subtitle">ATH-Móvil</h4>
        					<p>1-111-1111</p>
        				<h4 className="subtitle">Categoría</h4>
        					<p>{props.item.category}</p>
        			</div>

        		</div>
        		<div className="FAQ" id="FAQ">
        			
        			<h3 className="profileTitle">Preguntas Frecuentes</h3>
		        	{/*<FAQ/>
		        	<button className="accordion">Pregunta 1</button>*/}
		        	<div className="profileBox">
		        	<h4>Pregunta 1</h4>
		        		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
		        	</div>

		        	{/*<button className="accordion">Pregunta 2</button>*/}
		        	<div className="profileBox">
		        	<h4>Pregunta 2</h4>
		        		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
		        	</div>

		        	{/*<button className="accordion">Pregunta 3</button>*/}
		        	<div className="profileBox">
		        	<h4>Pregunta 3</h4>
		        		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
		        	</div>
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
