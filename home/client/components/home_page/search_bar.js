import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {term:'Search '};
	}

	//function to render search bar
	render() {
		return(
			<div>
			<input
			    //input changes when the state changes 
				value = {this.state.term}
				onChange={event => this.setState ({term: event.target.value})} />
			</div>
		);
	}
}

export default SearchBar;