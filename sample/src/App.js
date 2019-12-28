import {
  getCurrentTheme,
  initializeTheming,
  setTheme
} from 'css-theming';

export default {
  created() {
    initializeTheming();

    document.addEventListener('keypress', e => {
      if (e.defaultPrevented) return;

      if (e.key === 't') {
        const previousTheme = getCurrentTheme();
        const newTheme = previousTheme == 'default' ? 'default-dark' : 'default';
        setTheme(newTheme);
      }
    });
  }
}
