import companyModel from '../../models/company-model';

const GET_RESULTS = 'GET_RESULTS';
const SET_RESULTS = 'SET_RESULTS';

export const getResults = (company:companyModel[]) => {
  return {
    type:GET_RESULTS,
  }
}

export const setResults = (company:companyModel[]) => {
  return {
    type: SET_RESULTS,
    companies : company
  }
}

export const searchActions = {
  GET_RESULTS,
  SET_RESULTS,
}
