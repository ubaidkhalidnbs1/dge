import { Grid, MenuItem, FormControl, Select, FormHelperText, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { string, number, arrayOf, shape, oneOfType } from 'prop-types';

import './styles.scss';

const SelectField = ({ name, labelKey, options, cursorPosition, languageChange }) => {
  const { t } = useTranslation();

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const isError = field => Boolean(errors[field]);
  const getError = field => errors[field]?.message;

  return (
    <Grid item xs={12} sm={6}>
      <Typography variant='body1' sx={{ mb: 1 }}>
        {t(labelKey)} *
      </Typography>
      <FormControl fullWidth error={isError(name)}>
        <Controller
          name={name}
          control={control}
          defaultValue=''
          rules={{ required: t('validation.required', { field: t(labelKey) }) }}
          render={({ field }) => (
            <Select {...field} inputProps={cursorPosition} sx={languageChange}>
              {options.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {t(option.label)}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
      <FormHelperText>
        <span className='error-label'>{isError(name) && getError(name)}</span>
      </FormHelperText>
    </Grid>
  );
};

SelectField.propTypes = {
  labelKey: string.isRequired,
  name: string.isRequired,
  value: oneOfType([string, number]),
  options: arrayOf(
    shape({
      value: oneOfType([string, number]),
      label: string.isRequired,
    })
  ).isRequired,
  cursorPosition: shape({ style: shape({ direction: string }) }).isRequired,
  languageChange: shape({ '& .MuiFormHelperText-root': shape({ textAlign: string }) }).isRequired,
};

export default SelectField;
