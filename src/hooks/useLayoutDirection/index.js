import { useTranslation } from 'react-i18next';
import { LAYOUT_DIRECTION } from '@/constants';
import { LANGUAGE } from '@/constants/language';

const useLayoutDirection = () => {
  const { i18n } = useTranslation();

  const isRTL = i18n.language === LANGUAGE.AR;

  const result = {
    direction: LAYOUT_DIRECTION.LTR,
    textAlign: 'left',
    flexDirection: 'row',
  };

  if (isRTL) {
    result.direction = LAYOUT_DIRECTION.RTL;
    result.textAlign = 'right';
    result.flexDirection = 'row-reverse';
  }

  return result;
};

export default useLayoutDirection;
