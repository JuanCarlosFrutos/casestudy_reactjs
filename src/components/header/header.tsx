import * as React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

/*
 * Contain button export
 */

export default class Header extends React.Component<any, any> {

  render() {

    return (

	  <div id="exportContainer">

	    <Link to="/export"><button id="exportbutton"> Export </button></Link>
	    
	  </div>

    );

  }
}