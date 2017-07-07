import CompanyModel from '../models/company-model';

export interface AppStore {
  searchQuerry 	 	: CompanyModel;
  selectedCompany 	: CompanyModel;
  exportedList 		: CompanyModel [];
}