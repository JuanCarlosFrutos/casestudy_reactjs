import * as React from 'react';

export default class KeyValue extends React.Component<any, any> {
 
 // constructor(name: string) {
 //        super(props);
 //        this.name = name;
 //    }
  
 	render() {

	    return (
			  <div id="company">
			    <label>Key:</label><input type="text" name="fname"/>
			    <label>Value:</label><input type="text" name="lname"/>
			  </div>
	    );

  	}

}

