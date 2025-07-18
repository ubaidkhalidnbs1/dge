/* eslint-disable react/no-deprecated */
import axios from 'axios';
import i18n from '@/i18n';
import { Snackbar, Alert } from '@mui/material';
import ReactDOM from 'react-dom';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_FORM_BASE_URL || '',
  headers: {
    'Content-Type': 'application/json',
  },
});

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

axiosInstance.interceptors.request.use(
  config => {
    config.headers['Accept-Language'] = i18n.language;

    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const { response } = error;

    if (!response) {
      showGlobalError(i18n.t('error.network'));
    } else {
      const status = response.status;
      const message =
        response.data?.message ||
        (status === 401
          ? i18n.t('error.unauthorized')
          : status === 403
            ? i18n.t('error.forbidden')
            : status >= 500
              ? i18n.t('error.server')
              : i18n.t('error.unknown'));

      showGlobalError(message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
