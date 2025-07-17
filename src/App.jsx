import { Suspense, lazy } from 'react';
import { Container, Typography } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import ErrorBoundary from '@/components/ErrorBoundary';
import Loading from '@/components/Loading';
import ApplicationForm from '@/pages/ApplicationForm';
import { PATH } from '@/constants/routes';

const Success = lazy(() => import('@/pages/Success'));

const App = () => {
  return (
    <ErrorBoundary>
      <Container maxWidth='md'>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Navigate to='/apply' replace />} />
            <Route path={PATH.APPLY} element={<ApplicationForm />} />
            <Route path={PATH.SUCCESS} element={<Success />} />
            <Route path='*' element={<Typography>Page not found</Typography>} />
          </Routes>
        </Suspense>
      </Container>
    </ErrorBoundary>
  );
};

export default App;
