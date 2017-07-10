import { combineReducers } from 'redux';
import searchReducers from './search-reducer';
import companyReducers from './company-reducers';
import exportReducers from './export-reducers';
/*
 * Combine all reducers.
 * http://redux.js.org/docs/basics/Reducers.html
 */

const appReducers = combineReducers({
	searchReducers,
	companyReducers,
	exportReducers
})

export default appReducers