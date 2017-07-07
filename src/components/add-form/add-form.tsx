import * as React from 'react';
import KeyValue from '../key-value/key-value';
import { Link } from 'react-router-dom';

/*
 * This component allows add or edit company data.
 */

export default class AddForm extends React.Component<any, any> {

	private keys : Array<any> = [<KeyValue name={"Hi!"}></KeyValue>];

	constructor(){
		super();
		this.addKeyValue = this.addKeyValue.bind(this);
		//	this.state.push(<KeyValue name={"Hi!"}></KeyValue>);
	}

	/*
	 * Add more information about a company
	 */
	private addKeyValue() : void {
		this.keys.push(<KeyValue name={"Hi!"}></KeyValue>);
		alert(this.state);
	}

	// private renderKeyValue (name : string ) {
	// 	return (
	// 		<KeyValue name={name}></KeyValue>
	// 	);
	// }

	render() {

	    return (
			<div>
				<div>
				    {this.state}
				</div>

				<button id="plusbutton" onClick={this.addKeyValue}>+</button>
				<Link to="/search"><button>Save</button></Link>
				<Link to="/search"><button id="pulsa">Close</button></Link>
			</div>
	    );
	}
}

