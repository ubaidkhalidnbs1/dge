export const financialInfo = {
  financialSituation: 'financialSituation',
  employmentCircumstances: 'employmentCircumstances',
  reason: 'reason',
};

export const prompts = {
  [financialInfo.financialSituation]: 'prompt.financialSituation',
  [financialInfo.employmentCircumstances]: 'prompt.employmentCircumstances',
  [financialInfo.reason]: 'prompt.reason',
};

export const formElements = [
  {
    name: financialInfo.financialSituation,
    labelKey: 'form.financialSituation',
    placeholderKey: 'form.financialSituationPlaceholder',
  },
  {
    name: financialInfo.employmentCircumstances,
    labelKey: 'form.employmentCircumstances',
    placeholderKey: 'form.employmentCircumstancesPlaceholder',
  },
  {
    name: financialInfo.reason,
    labelKey: 'form.reason',
    placeholderKey: 'form.reasonPlaceholder',
  },
];
