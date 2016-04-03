import React, { Component } from 'react';
// same as const Component = React.Component

// New class called SearchBar give it access
//to all of the functionality from the 
//React.Component class

//Every class must have render function
//And return JSX

//functional component = dumb component
//class based component = is like ngModel

//Start off with functional component, when
//you realize you need more functionality
//refactor to class

//only class based components have state
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		
		return (
			<div className="search-bar">
				<input
					value={this.state.term} 
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);	
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;

