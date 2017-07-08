import * as React from 'react';

/*
 * Form for search information about companies
 */

export default class SearchBar extends React.Component<any, any> {
	
  render() {

    return (
        <fieldset>       
            <input type="text"/>                             
            <button>Go!</button>
            <label>Search Results: </label>
        </fieldset>
    );

  }

}

