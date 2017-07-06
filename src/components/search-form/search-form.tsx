import * as React from 'react';
import { Link } from 'react-router-dom'
import Company from '../company/company';
import SearchBar from '../search-bar/search-bar';

export default class SearchForm extends React.Component<any, any> {
  render() {

    return (
	  <div>
	    <SearchBar></SearchBar>
	    <label>Search Results: </label>
	    <div v-for="n in companies">
	      <Company />
	    </div>
	     <Link to="/new"><button id="addbutton">Add</button></Link>
	  </div>
    );
  }
}

