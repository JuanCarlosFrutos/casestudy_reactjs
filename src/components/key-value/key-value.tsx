import * as React from 'react';

/*
 * Contain name of company
 */

type props = {
	name : string
}

/*
 * Contain a key-value information about a company
 */

export default class KeyValue extends React.Component<props, any> {
 
	constructor(props : any) {
	    super(props);
	    this.state = { id : []};
	    this.state.id[0] = "Mercedes";
	}

 	render() {

	    return (
			  <div>
			    <label>Key:</label><input type="text" name="fname"/>
			    <label>Value:</label><input value={this.props.name} type="text" name="lname"/>
			  </div>
	    );

  	}

}

