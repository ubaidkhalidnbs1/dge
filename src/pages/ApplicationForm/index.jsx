import { FormProvider as FormContextProvider } from './context';
import FormSteps from './components/Steps';

const ApplicationFormPage = () => {
  return (
    <FormContextProvider>
      <FormSteps />
    </FormContextProvider>
  );
};

export default ApplicationFormPage;
