import * as React from 'react';
import { Link } from 'react-router-dom';
import Company from '../company/company';
import SearchBar from '../search-bar/search-bar';

/*
 * Form for search and select companies to edit it.
 */


export default class SearchForm extends React.Component<any, any> {

  render() {

    return (

	  <div>
	    <SearchBar></SearchBar>
	    <label>Search Results: </label>
	    <div>
	    	<Company name="mercedes" />
	    </div>
	    	<Link to="/new"><button id="addbutton">Add</button></Link>
	  </div>

    );

  }
}

