import {
  getCurrentTheme,
  ThemeStorage,
} from 'css-theming';

const themeStorage = new ThemeStorage('css-theming-theme');

export default {

  created() {
    themeStorage.initializeTheming();

    document.addEventListener('keypress', e => {
      if (e.defaultPrevented) return;

      if (e.key === 't') {
        const previousTheme = getCurrentTheme();
        const newTheme = previousTheme.name == 'default' ? 'default-dark' : 'default';
        themeStorage.setThemeName(newTheme);
      }
    });
  },
}
