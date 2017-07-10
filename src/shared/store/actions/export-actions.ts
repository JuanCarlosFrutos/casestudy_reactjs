import companyModel from '../../models/company-model';

const ADD_EXPORT = 'ADD_EXPORT';
const REMOVE_EXPORT = 'REMOVE_EXPORT';

export const addExport = (company:companyModel) => {
  return {
    type: ADD_EXPORT,
    company
  }
}

/*
 * removeExport receive index instead complet object because react-redux recomend 
 * pass minimun size obect to actions.
 */

export const removeExport = (indexCompany:number) => {
  return {
    type: REMOVE_EXPORT,
    indexCompany
  }
}

export const exportActions = {
  ADD_EXPORT,
  REMOVE_EXPORT,
}

