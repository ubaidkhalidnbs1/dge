import { Grid, TextField, Button, CircularProgress, Typography } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { bool, string, shape, func } from 'prop-types';

const TextArea = ({
  activeField,
  loading,
  name,
  labelKey,
  placeholderKey,
  cursorPosition,
  languageChange,
  handleGenerate,
}) => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const generateText = async () => {
    await handleGenerate(name);
  };

  //const showError = touchedFields?.[name] && errors?.[name];
  const showError = errors && errors?.[name];

  return (
    <Grid item xs={12}>
      <Typography variant='body1' sx={{ mb: 1 }}>
        {t(labelKey)} *
      </Typography>
      <TextField
        fullWidth
        multiline
        minRows={4}
        placeholder={t(placeholderKey)}
        {...register(name, {
          required: t('validation.required', { field: t(labelKey) }),
        })}
        error={!!showError}
        helperText={showError?.message}
        inputProps={cursorPosition}
        sx={languageChange}
      />
      <Button
        onClick={generateText}
        variant='outlined'
        startIcon={<SmartToyIcon />}
        sx={{ mt: 1, gap: '10px' }}
        disabled={loading}
      >
        {loading && activeField === name ? <CircularProgress size={20} /> : t('form.helpMeWrite')}
      </Button>
    </Grid>
  );
};

TextArea.propTypes = {
  activeField: string,
  loading: bool.isRequired,
  labelKey: string.isRequired,
  placeholderKey: string.isRequired,
  cursorPosition: shape({ style: shape({ direction: string }) }).isRequired,
  languageChange: shape({ '& .MuiFormHelperText-root': shape({ textAlign: string }) }).isRequired,
  handleGenerate: func.isRequired,
};

export default TextArea;
