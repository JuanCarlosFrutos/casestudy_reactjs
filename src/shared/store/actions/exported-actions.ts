import companyModel from '../../models/company-model';

const ADD_EXPORT = 'ADD_EXPORT';
const REMOVE_EXPORT = 'REMOVE_EXPORT';

export const addExport = (company:companyModel) => {
  return {
    type: ADD_EXPORT,
    company
  }
}

export const removeExport = (company:companyModel) => {
  return {
    type: REMOVE_EXPORT,
    company
  }
}

