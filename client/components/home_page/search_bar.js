import React, {Component} from 'react';
// make class
class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term:' '};
    }
    //function to render search bar
    render() {
        return(
            <div className="search-bar">
            <input
                //input changes when the state changes 
                value = {this.state.term}
                onChange={event => this.setState ({term: event.target.value})} />
            </div>
        );
    }
}
export default SearchBar;