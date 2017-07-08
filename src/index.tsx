import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchForm from './components/search-form/search-form';
import registerServiceWorker from './registerServiceWorker';
import AddForm from './components/add-form/add-form';
import App from './components/app';
import ExportForm from './components/export-form/export-form'
import './index.css';

ReactDOM.render(

	<Router>

    	<div>
	      <Route exact path='/' component= {App}/>
	      <Route path="/new" component={AddForm}/>
	      <Route path="/search" component={SearchForm}/>
	      <Route path="/edit/:id" component={AddForm}/>
	      <Route path="/export" component={ExportForm}/>
	    </div>

    </Router>,

  	document.getElementById('root') as HTMLElement
);

registerServiceWorker();
