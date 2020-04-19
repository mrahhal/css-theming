import { Theme } from './models';
import { getAllThemes, getTheme, initializeTheming, setTheme } from './themes';

export class ThemeStorage {
  constructor(
    private _key: string,
    private _defaultTheme?: string,
    private _category?: string,
  ) { }

  initializeTheming() {
    const themeName = this._getThemeNameFromLocalStorage();
    if (themeName) {
      initializeTheming(getTheme(themeName), this._category);
    } else {
      let theme: Theme | undefined;

      // There's no stored theme, so we'll check if the user's system prefers dark themes.
      // We can only do that if the browser supports matchMedia.
      if (!!window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          // Let's find the first dark theme and activate it.
          const darkThemes = getAllThemes().filter(t => t.brightness === 'dark');
          if (darkThemes.length) {
            theme = darkThemes[0];
          }
        }
      }

      initializeTheming(theme, this._category);
    }
  }

  setThemeName(themeName: string) {
    localStorage.setItem(this._key, themeName);
    setTheme(getTheme(themeName));
  }

  private _getThemeNameFromLocalStorage() {
    const theme: string | null = localStorage.getItem(this._key);
    return theme || this._defaultTheme;
  }
}
