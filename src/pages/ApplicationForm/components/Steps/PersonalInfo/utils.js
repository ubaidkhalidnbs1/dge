export const validateDob = (value, t) => {
  const today = new Date();
  const birthDate = new Date(value);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();
  const isBirthdayPassed = monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0);
  const actualAge = isBirthdayPassed ? age : age - 1;

  if (actualAge < 18) {
    return t('validation.minAge', {
      field: t('form.dob'),
      age: 18,
    });
  }
  if (actualAge > 60) {
    return t('validation.maxAge', {
      field: t('form.dob'),
      age: 60,
    });
  }
  return true;
};
