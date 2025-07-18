/* eslint-disable react/no-deprecated */
import { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import ReactDOM from 'react-dom';
import i18n from '@/i18n';

const showGlobalError = message => {
  const el = document.createElement('div');
  document.body.appendChild(el);

  const close = () => {
    ReactDOM.unmountComponentAtNode(el);
    document.body.removeChild(el);
  };

  ReactDOM.render(
    <Snackbar
      open
      autoHideDuration={4000}
      onClose={close}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert severity='error' onClose={close} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>,
    el
  );
};

const useAsyncAction = (callback, { onSuccess, onError } = {}) => {
  const [loading, setLoading] = useState(false);

  const execute = async (...args) => {
    try {
      setLoading(true);
      const response = await callback(...args);
      const result = response.data;
      if (onSuccess) onSuccess(result);
      return result;
    } catch (error) {
      const fallback = i18n.t('error.unknown');
      const message = error?.response?.data?.message || fallback;

      showGlobalError(message);

      if (onError) onError(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { execute, loading };
};

export default useAsyncAction;
