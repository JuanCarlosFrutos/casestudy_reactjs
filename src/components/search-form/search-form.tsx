import * as React from 'react';
import SearchFeed from '../search-feed/search-feed';
import Header from '../header/header';
import './search-form.css';

/*
 * Form for search and select companies to edit it.
 */

export default class SearchForm extends React.Component<any, any> {

  render() {

    return (

	  <div id="searchContainer">
	    <Header />
	    <SearchFeed />
	  </div>

    );

  }
}

