import { Fragment, useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { string, shape } from 'prop-types';
import formService from '@/pages/ApplicationForm/services';
import useLayoutDirection from '@/hooks/useLayoutDirection';
import useAsyncAction from '@/hooks/useAsyncAction';
import { formElements, prompts } from './constants';
import TextArea from './TextArea';

const FinancialSupport = ({ cursorPosition, languageChange }) => {
  const { t } = useTranslation();

  const { setValue, trigger } = useFormContext();

  const { direction } = useLayoutDirection();

  const [activeField, setActiveField] = useState(null);
  const [gptResult, setGptResult] = useState('');

  const { execute, loading } = useAsyncAction(formService.generateText, {
    onSuccess: response => {
      const gptData = response.result;
      setGptResult(gptData);
    },
    onError: () => {
      setActiveField(null);
    },
  });

  const handleGenerate = async field => {
    setActiveField(field);
    await execute(t(prompts[field]));
  };

  const handleAccept = async () => {
    setValue(activeField, gptResult, {
      shouldValidate: true,
      shouldDirty: true,
    });

    await trigger(activeField);
    setActiveField(null);
    setGptResult('');
  };

  const handleClose = () => {
    setActiveField(null);
    setGptResult('');
  };

  const compProps = {
    cursorPosition,
    languageChange,
    handleGenerate,
    activeField,
    loading,
  };

  return (
    <Fragment>
      <Grid container spacing={3} dir={direction}>
        {formElements.map(formElement => (
          <TextArea
            key={formElement.name}
            name={formElement.name}
            labelKey={formElement.labelKey}
            placeholderKey={formElement.placeholderKey}
            {...compProps}
          />
        ))}
      </Grid>

      <Dialog open={!!activeField && gptResult !== ''} onClose={handleClose} fullWidth>
        <DialogTitle>{t('form.generatedSuggestion')}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            multiline
            minRows={6}
            value={gptResult}
            onChange={e => setGptResult(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='inherit'>
            {t('discard')}
          </Button>
          <Button onClick={handleAccept} variant='contained'>
            {t('accept')}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

FinancialSupport.propTypes = {
  cursorPosition: shape({ style: shape({ direction: string }) }).isRequired,
  languageChange: shape({ '& .MuiFormHelperText-root': shape({ textAlign: string }) }).isRequired,
};

export default FinancialSupport;
