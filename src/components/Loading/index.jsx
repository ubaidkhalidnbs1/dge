import { useTranslation } from 'react-i18next';

const Loading = () => {
  const { t } = useTranslation();

  const loadingText = t('loading');

  return <div>{loadingText}</div>;
};

export default Loading;
