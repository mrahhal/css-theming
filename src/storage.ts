import { getTheme, initializeTheming, setTheme } from './themes';

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
      initializeTheming(undefined, this._category);
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
