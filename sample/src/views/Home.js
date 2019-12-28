import { getThemeNames } from 'css-theming';

export default {
  data: () => ({
    message: getThemeNames().join(', '),
  }),
};
