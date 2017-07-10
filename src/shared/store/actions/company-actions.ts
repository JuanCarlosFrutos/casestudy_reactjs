import companyModel from '../../models/company-model';

const SELECTED_COMPANY = 'SELECTED_COMPANY';
const DESELECTED_COMPANY = 'DESELECTED_COMPANY';

export const selectCompany = (company:companyModel) => {
  return {
    type: SELECTED_COMPANY,
    company
  }
}

export const deselectCompany = () => {
  return {
    type: DESELECTED_COMPANY
  }
}