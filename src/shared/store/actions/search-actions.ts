import companyModel from '../../models/company-model';

const GET_RESULTS = 'GET_RESULTS';
const SET_RESULTS = 'SET_RESULTS';

export const getResults = (company:companyModel[]) => {
  return {
    type:GET_RESULTS,
    company
  }
}

export const setResult = (company:companyModel[]) => {
  return {
    type: SET_RESULTS,
    company
  }
}