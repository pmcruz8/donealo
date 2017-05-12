import React from 'react';
import Navbar from './navbar'
//For center use bootstrap className: "text-center"

const HeaderProf = () => {
	return(
		<div >
			<Navbar />
			<div className="profHeader">
    			<div className="profTitle">Nombre de la organización</div>
    				<img className="orgPhoto" src="/img/org-placeholder.png" alt="" />
	    	</div>
    	</div>
	);
}

export default HeaderProf;