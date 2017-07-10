import CompanyModel from "../../models/company-model";
import { searchActions } from "../actions/search-actions";

/*
 * State is initializated in params.
 */

const searchReducers  = (state : CompanyModel[] = [], action : any ) => {

  switch (action.type) {
    case searchActions.GET_RESULTS:
      return state;

    case searchActions.SET_RESULTS:
      return action.companies;

    default:
      return state;
  }

};

export default searchReducers
