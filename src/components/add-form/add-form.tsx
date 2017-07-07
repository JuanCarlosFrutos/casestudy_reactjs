import * as React from 'react';
import KeyValue from '../key-value/key-value';
import { Link } from 'react-router-dom';

/*
 * This component allows add or edit company data.
 */

export default class AddForm extends React.Component<any, any> {

	constructor(){
		super();
		this.appendInput = this.appendInput.bind(this);
 		this.state = { inputs: ['input-0'] };
	}

	/*
	 * Add more information about a company
	 */

    private appendInput() {
        let newInput = `input-${this.state.inputs.length}`;
        this.setState({ inputs: this.state.inputs.concat([newInput]) });
    }

    /*
	 * Show information about company
	 */

	private renderKeyValue (name : string ) {
		return (
			<KeyValue name={name}></KeyValue>
		);
	}

	render() {

	    return (

			<div>
				{this.state.inputs.map(this.renderKeyValue)}

				<button id="plusbutton" onClick={this.appendInput}>+</button>
				<Link to="/search"><button>Save</button></Link>
				<Link to="/search"><button id="pulsa">Close</button></Link>

			</div>
			
	    );
	}
}

