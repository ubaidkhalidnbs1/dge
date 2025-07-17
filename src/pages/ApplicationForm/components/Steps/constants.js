import PersonalInfo from './PersonalInfo';
import HouseholdInfo from './HousholdInfo';
import FinancialInfo from './FinancialInfo';

import { personalInfo } from './PersonalInfo/constants';
import { householdInfo } from './HousholdInfo/constants';
import { financialInfo } from './FinancialInfo/constants';

const resetFormValue = form => {
  const result = {};
  Object.values(form).forEach(field => {
    result[field] = '';
  });

  return result;
};

const personalInfoDefaultValues = resetFormValue(personalInfo);
const housoholdInfoDefaultValues = resetFormValue(householdInfo);
const financialInfoInfoDefaultValues = resetFormValue(financialInfo);

export const EMPTY_DEFAULTS = {
  ...personalInfoDefaultValues,
  ...housoholdInfoDefaultValues,
  ...financialInfoInfoDefaultValues,
};

export const STEPS = [
  {
    Component: PersonalInfo,
    Fields: Object.values(personalInfo),
  },
  {
    Component: HouseholdInfo,
    Fields: Object.values(householdInfo),
  },
  {
    Component: FinancialInfo,
    Fields: Object.values(financialInfo),
  },
];
