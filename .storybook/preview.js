import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BrowserRouter } from 'react-router-dom';

import { LANGUAGE } from '@/constants/language';

import '../src/styles/main.scss';
import '../src/i18n';

// Simple theme for Storybook
const theme = {
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
};

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
        { name: 'gray', value: '#f5f5f5' },
      ],
    },
  },
  decorators: [
    Story => (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CssBaseline />
            <div style={{ padding: '20px' }}>
              <Story />
            </div>
          </LocalizationProvider>
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: LANGUAGE.EN,
      toolbar: {
        icon: 'globe',
        items: [
          { value: LANGUAGE.EN, title: 'English' },
          { value: LANGUAGE.AR, title: 'العربية' },
        ],
      },
    },
  },
};

export default preview;
