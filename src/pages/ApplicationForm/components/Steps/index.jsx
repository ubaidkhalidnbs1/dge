import { Fragment, useEffect, useMemo } from 'react';
import { Box, Paper, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useTranslation } from 'react-i18next';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import useAsyncAction from '@/hooks/useAsyncAction';
import { useFormContextAPI } from '@/pages/ApplicationForm/context';
import useLayoutDirection from '@/hooks/useLayoutDirection';
import formService from '@/pages/ApplicationForm/services';
import { PATH } from '@/constants/routes';
import FormContent from '../FormContent';

import { EMPTY_DEFAULTS, STEPS } from './constants';

const MultiStepForm = () => {
  const { t, i18n } = useTranslation();
  const { direction, textAlign, flexDirection } = useLayoutDirection();
  const navigate = useNavigate();

  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: EMPTY_DEFAULTS,
  });

  const { reset: rhfReset, trigger, getValues } = methods;

  const { currentStep, setCurrentStep, saveDraft, loadDraft, resetForm } = useFormContextAPI();

  const { execute, loading } = useAsyncAction(formService.submit, {
    onSuccess: () => {
      handleReset();
      navigate(PATH.SUCCESS);
    },
  });

  /* eslint-disable react-hooks/exhaustive-deps */
  const stepLabels = useMemo(
    () => [t('form.step1'), t('form.step2'), t('form.step3')],
    [i18n.language]
  );

  const totalSteps = stepLabels.length;

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const draft = loadDraft();
    if (draft?.formData) {
      rhfReset(draft.formData);
    }
    if (draft?.step !== undefined) {
      setCurrentStep(draft.step);
    }
  }, []);

  const handleNext = async () => {
    const currentStepFields = STEPS[currentStep]?.Fields || [];
    const isValid = await trigger(currentStepFields);

    if (!isValid) return;

    const values = getValues();

    if (currentStep === totalSteps - 1) {
      await execute(values);
    } else {
      const nextStep = currentStep + 1;
      saveDraft(nextStep, values);
      setCurrentStep(nextStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    rhfReset(EMPTY_DEFAULTS);
    resetForm();
  };

  return (
    <FormProvider {...methods}>
      <Paper elevation={3} sx={{ p: 4 }} dir={direction}>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          mb={3}
          flexDirection={flexDirection}
        >
          <Typography variant='h5'>{t('formTitle')}</Typography>
          <Button
            type='button'
            variant='outlined'
            color='warning'
            onClick={handleReset}
            sx={{ minWidth: '40px', px: 1 }}
            aria-label={t('reset')}
          >
            <RestartAltIcon />
          </Button>
        </Box>

        <Box sx={{ mb: 4, direction }}>
          <Stepper activeStep={currentStep}>
            {stepLabels.map((label, index) => (
              <Step key={index}>
                <StepLabel sx={{ gap: '5px' }}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <form noValidate>
          <FormContent currentStep={currentStep} textAlign={textAlign} direction={direction} />

          <Box mt={4} display='flex' justifyContent='space-between' flexDirection={flexDirection}>
            <Button
              type='button'
              onClick={handleBack}
              disabled={currentStep === 0 || loading}
              variant='outlined'
            >
              {t('back')}
            </Button>

            <Button type='button' onClick={handleNext} disabled={loading} variant='contained'>
              <Fragment>
                {loading
                  ? t('loading.submitting')
                  : currentStep === totalSteps - 1
                    ? t('submit')
                    : t('next')}
              </Fragment>
            </Button>
          </Box>
        </form>
      </Paper>
    </FormProvider>
  );
};

export default MultiStepForm;
