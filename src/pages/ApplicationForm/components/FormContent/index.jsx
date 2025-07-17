import { number, string } from 'prop-types';
import { STEPS } from '../Steps/constants';

const FormContent = ({ direction, textAlign, currentStep }) => {
  const componentProps = {
    languageChange: { '& .MuiFormHelperText-root': { textAlign } },
    cursorPosition: { style: { direction } },
    dir: direction,
  };

  const StepComponent = STEPS[currentStep].Component || (() => null);
  return <StepComponent {...componentProps} />;
};

FormContent.propTypes = {
  currentStep: number.isRequired,
  textAlign: string.isRequired,
  direction: string.isRequired,
};

export default FormContent;
