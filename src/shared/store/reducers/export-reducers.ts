import CompanyModel from "../../models/company-model";
import { exportActions } from "../actions/export-actions";

/*
 * Initial state -> empty array.
 */

const exportReducers  = (state : CompanyModel[] = [], action : any ) => {

  // ...state -> http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html

  switch (action.type) {
    case exportActions.ADD_EXPORT:
      return [ ...state, action.company ]

    case exportActions.REMOVE_EXPORT:
	  return [
	    ...state.slice(0, action.indexCompany),
	    ...state.slice(action.indexCompany + 1)
	  ]

    default:
      return state;
  }

};

export default exportReducers