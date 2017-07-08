import * as React from 'react';
import { Link } from 'react-router-dom';
import Company from '../company/company';

/*
 * Form for search and select companies to edit it.
 */

export default class ExportForm extends React.Component<any, any> {

  private companies : Array<any> = [<Company name="mercedes" />, <Company name="BMW" />];

  render() {

    return (

	  <div>
	    <div>
	    	{this.companies}
	    </div>
	    <Link to="/search"><button id="exportbutton">Export</button></Link>
	  </div>

    );

  }
}

