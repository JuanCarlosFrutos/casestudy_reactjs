import CompanyModel from "../../models/company-model";
import { companyActions } from "../actions/company-actions";

/*
 * Initial state.
 */

const initialCompany = {
	name : "default"
}

const companyReducers  = (state : CompanyModel = initialCompany, action : any ) => {

  switch (action.type) {
    case companyActions.SELECTED_COMPANY:
      return action.company;

    default:
      return state;
  }

};

export default companyReducers