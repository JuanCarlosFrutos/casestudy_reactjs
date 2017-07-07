import * as React from 'react';
import { Link } from 'react-router-dom';

/*
 * Name of the company
 */

type props  = {
	name : string;
}

/*
 * Contain all information about one company and show only the first row
 */

export default class Company extends React.Component<props, any> {

  render() {

    return (

	  <div>

	    <label>Key: </label>
	    <label>Nombre </label>
	    <label>Value: </label>
	    <label> {this.props.name} </label>
	    <Link to={"/edit/" + this.props.name}><button> Edit </button></Link>
	    
	  </div>

    );

  }
}