import React, { useState } from 'react';
import { Alert, AlertTitle, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class ErrorBoundaryInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('Error caught by ErrorBoundary:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    const { t } = this.props;

    if (this.state.hasError) {
      return (
        <Box mt={4}>
          <Alert severity='error'>
            <AlertTitle>{t('error.title')}</AlertTitle>
            {this.state.error?.message || t('error.unexpected')}
            <br />
            <Button onClick={this.handleReset} variant='outlined' sx={{ mt: 2 }}>
              {t('error.refresh')}
            </Button>
          </Alert>
        </Box>
      );
    }

    return this.props.children;
  }
}

ErrorBoundaryInner.propTypes = {
  t: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const ErrorBoundary = ({ children }) => {
  const { t } = useTranslation();
  const [key] = useState(() => Date.now());

  return (
    <ErrorBoundaryInner key={key} t={t}>
      {children}
    </ErrorBoundaryInner>
  );
};

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
