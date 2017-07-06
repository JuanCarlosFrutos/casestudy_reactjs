import * as React from 'react';
import KeyValue from '../key-value/key-value';
import { Link } from 'react-router-dom';

export default class AddForm extends React.Component<any, any> {
  render() {

    return (
		<div>
			    <div v-for="n in range">
			       <KeyValue></KeyValue>
			    </div>

			    <button id="plusbutton">+</button>
			    <Link to="/search"><button>Save</button></Link>
			    <Link to="/search"><button id="pulsa">Close</button></Link>
		</div>
    );
  }
}

