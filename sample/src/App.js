import {
  getTheme,
  initializeTheming,
  setTheme
} from 'css-theming';

export default {
  mounted() {
    initializeTheming();

    document.addEventListener('keypress', e => {
      if (e.defaultPrevented) return;

      if (e.key === 't') {
        const previousTheme = getTheme();
        const newTheme = previousTheme == 'default' ? 'default-dark' : 'default';
        setTheme(newTheme);
      }
    });
  }
}
