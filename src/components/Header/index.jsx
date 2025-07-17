import { useTranslation } from 'react-i18next';
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  ListItemText,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { LAYOUT_DIRECTION } from '@/constants';
import { LANGUAGE } from '@/constants/language';

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = event => {
    const newLang = event.target.value;
    if (newLang) {
      i18n.changeLanguage(newLang);
    }
  };

  return (
    <Box py={4} display='flex' justifyContent='space-between' alignItems='center'>
      <Typography variant='h5'>{t('appTitle')}</Typography>

      <FormControl
        variant='outlined'
        size='small'
        sx={{ minWidth: 160, direction: LAYOUT_DIRECTION.LTR }}
      >
        <InputLabel id='language-select-label'>{t('language')}</InputLabel>

        <Select
          labelId='language-select-label'
          id='language-select'
          value={i18n.language}
          onChange={handleLanguageChange}
          label={t('language')}
          startAdornment={<LanguageIcon sx={{ mr: 1, color: 'action.active' }} />}
        >
          <MenuItem value={LANGUAGE.EN}>
            <ListItemText>{t('english')}</ListItemText>
          </MenuItem>
          <MenuItem value={LANGUAGE.AR}>
            <ListItemText>{t('arabic')}</ListItemText>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Header;
