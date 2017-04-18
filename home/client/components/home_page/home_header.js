import React from 'react';
import Navbar from './navigation_bar'
import SearchBar from './search_bar';
//For center use bootstrap className: "text-center"

const Header = () => {
	return(
		<div >
			<div className="homeHeader">
				<div className="homeText">
					<div className="logo">Donealo!</div>
	    			<div className="homeMotto">Dona por una causa</div>

	    			<SearchBar/>
	    		</div>
	    	</div>
    	</div>
	);

}

export default Header;