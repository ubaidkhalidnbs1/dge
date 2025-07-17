import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Success = () => {
  const { t } = useTranslation();

  return (
    <Box mt={6} textAlign='center'>
      <Typography variant='h4' gutterBottom>
        🎉 {t('thankYouTitle') || 'Thank You!'}
      </Typography>
      <Typography variant='body1' mb={4}>
        {t('thankYouMessage') || 'Your application has been successfully submitted.'}
      </Typography>

      <Button component={Link} to='/apply' variant='contained' color='primary'>
        {t('submitAnother') || 'Submit Another Application'}
      </Button>
    </Box>
  );
};

export default Success;
