import CompanyModel from "../../models/company-model";
import SearchActions from "../actions/search-actions";

export default (state : CompanyModel, action : any ) => {
  let newState :  CompanyModel = {};

  switch (action) {
    case SearchActions.GET_RESULTS:
        newState.test = "GET_RESULTS";
      return newState;

    case SearchActions.SET_RESULTS:
        newState.test = "SET_RESULTS";
      return newState;

    case SearchActions.REMOVE_RESULTS:
        newState.test = "REMOVE_RESULTS";
      return newState;

    default:
      return state;
  }

};
