import * as React from 'react';
import Header from '../header/header';
import AddFeed from '../add-feed/add-feed';
import './add-form.css';

/*
 * This component allows add or edit company data.
 */

export default class AddForm extends React.Component<any, any> {

	render() {

	    return (

			<div id="addContainer">
				<Header />
				<AddFeed />
			</div>
			
	    );
	}
}

