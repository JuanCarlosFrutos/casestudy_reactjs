import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from './App';
import Hello from './components/hello/hello';
import SearchBar from './components/search-bar/search-bar';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
	<Router>
    	<div>
	      <Route exact path='/' component= {App}/>
	      <Route path="/about" component={Hello}/>
	      <Route path="/topics" component={SearchBar}/>
	    </div>
    </Router>,
  	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
