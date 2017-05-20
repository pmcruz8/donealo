import React from 'react';
// import Navbar from './navbar'
import Navbar from '../home_page/navigation_bar'
//For center use bootstrap className: "text-center"

const HeaderProf = () => {
	return(
		<div >
			<div className="profHeader">
				<Navbar />
    			<div className="orgName">Nombre de la organización</div>
    				<img className="orgPhoto" src="/img/org-placeholder.png" alt="" />
	    	</div>
    	</div>
	);
}

export default HeaderProf;