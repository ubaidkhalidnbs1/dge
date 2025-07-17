import { Grid, TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { string, shape } from 'prop-types';
import SelectField from '@/pages/ApplicationForm/components/SelectField';
import {
  householdInfo,
  maritalStatusOptions,
  employmentStatusOptions,
  housingStatusOptions,
} from './constants';

const HouseholdInformation = ({ cursorPosition, languageChange }) => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isError = field => Boolean(errors[field]);
  const getError = field => errors[field]?.message;

  const { maritalStatus, dependents, employmentStatus, housingStatus, monthlyIncome } =
    householdInfo;

  return (
    <Grid container spacing={3}>
      <SelectField
        name={maritalStatus}
        labelKey='form.maritalStatus'
        options={maritalStatusOptions}
        cursorPosition={cursorPosition}
        languageChange={languageChange}
      />

      <Grid item xs={12} sm={6}>
        <Typography variant='body1' sx={{ mb: 1 }}>
          {t('form.dependentsPlaceholder')} *
        </Typography>
        <TextField
          fullWidth
          type='number'
          placeholder={t('form.dependentsPlaceholder')}
          {...register(dependents, {
            required: t('validation.required', { field: t('form.dependents') }),
          })}
          error={isError(dependents)}
          helperText={getError(dependents)}
          inputProps={{ min: 0, ...cursorPosition }}
          sx={languageChange}
        />
      </Grid>

      <SelectField
        name={employmentStatus}
        labelKey='form.employmentStatus'
        options={employmentStatusOptions}
        cursorPosition={cursorPosition}
        languageChange={languageChange}
      />

      <Grid item xs={12} sm={6}>
        <Typography variant='body1' sx={{ mb: 1 }}>
          {t('form.monthlyIncome')} *
        </Typography>
        <TextField
          fullWidth
          type='number'
          placeholder={t('form.monthlyIncomePlaceholder')}
          {...register(monthlyIncome, {
            required: t('validation.required', { field: t('form.monthlyIncome') }),
          })}
          error={isError(monthlyIncome)}
          helperText={getError(monthlyIncome)}
          inputProps={{ min: 0, ...cursorPosition }}
          sx={languageChange}
        />
      </Grid>

      <SelectField
        name={housingStatus}
        labelKey='form.housingStatus'
        options={housingStatusOptions}
        cursorPosition={cursorPosition}
        languageChange={languageChange}
      />
    </Grid>
  );
};

HouseholdInformation.propTypes = {
  cursorPosition: shape({ style: shape({ direction: string }) }).isRequired,
  languageChange: shape({ '& .MuiFormHelperText-root': shape({ textAlign: string }) }).isRequired,
};

export default HouseholdInformation;
