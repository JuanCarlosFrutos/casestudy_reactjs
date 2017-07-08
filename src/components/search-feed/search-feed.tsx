import * as React from 'react';
import { Link } from 'react-router-dom';
import Company from '../company/company';
import SearchBar from '../search-bar/search-bar';
import './search-feed.css';

/*
 * Form for search and select companies to edit it.
 */

export default class SearchFeed extends React.Component<any, any> {

  private companies : Array<any> = [<Company name="mercedes" />, <Company name="BMW" />];

  render() {

    return (

	  <div id="searchFeedContainer">
	    <SearchBar></SearchBar>
	    <div>
	    	{this.companies}
	    </div>
	    <Link to="/new"><button id="addbutton">Add</button></Link>
	  </div>

    );

  }
}

