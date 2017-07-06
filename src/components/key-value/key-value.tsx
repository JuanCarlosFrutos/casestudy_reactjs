import * as React from 'react';

export default class keyValue extends React.Component<any, any> {
  
  render() {

    return (
		  <div id="company">
		    <label>Key:</label><input type="text" name="fname">
		    <label>Value:</label><input type="text" name="lname">
		    <slot></slot>
		  </div>
    );

  }

}

