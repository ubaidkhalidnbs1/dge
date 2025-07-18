import { Grid, TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { string, shape } from 'prop-types';
import { REGEX } from '@/constants/regex';
import SelectField from '@/pages/ApplicationForm/components/SelectField';
import { genderOptions, personalInfo } from './constants';
import { validateDob } from './utils';

const PersonalInfo = ({ languageChange, cursorPosition, dir }) => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { name, address, city, country, dob, email, gender, nationalId, phone, state } =
    personalInfo;

  return (
    <Grid container spacing={3} dir={dir}>
      <Grid item xs={12} sm={6}>
        <Typography variant='body1' sx={{ mb: 1 }}>
          {t('form.name')} *
        </Typography>
        <TextField
          fullWidth
          inputProps={cursorPosition}
          {...register(name, {
            required: t('validation.required', { field: t('form.name') }),
          })}
          sx={languageChange}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography variant='body1' sx={{ mb: 1 }}>
          {t('form.nationalId')} *
        </Typography>
        <TextField
          fullWidth
          {...register(nationalId, {
            required: t('validation.required', { field: t('form.nationalId') }),
            pattern: {
              value: REGEX.NUMBER,
              message: t('validation.nationalId', { field: t('form.nationalId') }),
            },
          })}
          error={!!errors.nationalId}
          inputProps={cursorPosition}
          sx={languageChange}
          helperText={errors.nationalId?.message}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography variant='body1' sx={{ mb: 1 }}>
          {t('form.dob')} *
        </Typography>
        <TextField
          fullWidth
          inputProps={cursorPosition}
          type='date'
          sx={languageChange}
          InputLabelProps={{ shrink: true }}
          {...register(dob, {
            required: t('validation.required', { field: t('form.dob') }),
            validate: value => validateDob(value, t),
          })}
          error={!!errors.dob}
          helperText={errors.dob?.message}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <SelectField
          name={gender}
          labelKey='form.gender'
          options={genderOptions}
          cursorPosition={cursorPosition}
          languageChange={languageChange}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant='body1' sx={{ mb: 1 }}>
          {t('form.address')} *
        </Typography>
        <TextField
          fullWidth
          inputProps={cursorPosition}
          sx={languageChange}
          {...register(address, {
            required: t('validation.required', { field: t('form.address') }),
          })}
          error={!!errors.address}
          helperText={errors.address?.message}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography variant='body1' sx={{ mb: 1 }}>
          {t('form.city')} *
        </Typography>
        <TextField
          fullWidth
          inputProps={cursorPosition}
          sx={languageChange}
          {...register(city, {
            required: t('validation.required', { field: t('form.city') }),
          })}
          error={!!errors.city}
          helperText={errors.city?.message}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography variant='body1' sx={{ mb: 1 }}>
          {t('form.state')} *
        </Typography>
        <TextField
          fullWidth
          sx={languageChange}
          inputProps={cursorPosition}
          {...register(state, {
            required: t('validation.required', { field: t('form.state') }),
          })}
          error={!!errors.state}
          helperText={errors.state?.message}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography variant='body1' sx={{ mb: 1 }}>
          {t('form.country')} *
        </Typography>
        <TextField
          fullWidth
          inputProps={cursorPosition}
          sx={languageChange}
          {...register(country, {
            required: t('validation.required', { field: t('form.country') }),
          })}
          error={!!errors.country}
          helperText={errors.country?.message}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography variant='body1' sx={{ mb: 1 }}>
          {t('form.phone')} *
        </Typography>
        <TextField
          fullWidth
          inputProps={cursorPosition}
          sx={languageChange}
          {...register(phone, {
            required: t('validation.required', { field: t('form.phone') }),
            pattern: {
              value: REGEX.PHONE,
              message: t('validation.phone', { field: t('form.phone') }),
            },
          })}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant='body1' sx={{ mb: 1 }}>
          {t('form.email')} *
        </Typography>
        <TextField
          fullWidth
          inputProps={cursorPosition}
          sx={languageChange}
          {...register(email, {
            required: t('validation.required', { field: t('form.email') }),
            pattern: {
              value: REGEX.EMAIL,
              message: t('validation.email', { field: t('form.email') }),
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </Grid>
    </Grid>
  );
};

PersonalInfo.propTypes = {
  cursorPosition: shape({ style: shape({ direction: string }) }).isRequired,
  languageChange: shape({ '& .MuiFormHelperText-root': shape({ textAlign: string }) }).isRequired,
  dir: string.isRequired,
};

export default PersonalInfo;
