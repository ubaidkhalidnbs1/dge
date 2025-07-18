import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { LOCAL_STORAGE_KEY } from '../constants';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formDraft, setFormDraft] = useState({});

  const saveDraft = (step, formData) => {
    const payload = { step, formData };
    setCurrentStep(step);
    setFormDraft(formData);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(payload));
  };

  const loadDraft = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  };

  const resetForm = () => {
    setCurrentStep(0);
    setFormDraft({});
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <FormContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        formDraft,
        saveDraft,
        loadDraft,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useFormContextAPI = () => useContext(FormContext);
