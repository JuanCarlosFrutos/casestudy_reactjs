import companyModel from '../../models/company-model';

const SELECTED_COMPANY = 'SELECTED_COMPANY';

export const selectCompany = (company:companyModel) => {
  return {
    type: SELECTED_COMPANY,
    company
  }
}

export const companyActions = {
  SELECTED_COMPANY
}