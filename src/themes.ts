import { getDesignValue, getThemeNames } from './design-values';
import { ensureThemeCssName, ensureThemeRawName } from './helpers';
import { Brightness, Theme } from './models';

const htmlElement = document.getElementsByTagName('html')[0];

let previousTheme: string;
let themes: Theme[];

function validateThemeName(theme: string) {
  for (const t of getThemeNames()) {
    if (t === theme) {
      return;
    }
  }
  throw new Error(`Theme '${theme}' is not defined.`);
}

export function initializeTheming(theme?: string) {
  if (theme) {
    validateThemeName(theme);
  }

  previousTheme = ensureThemeCssName(theme ?? getThemeNames()[0]);
  htmlElement.classList.add(previousTheme);
}

export function setTheme(theme: string) {
  validateThemeName(theme);

  theme = ensureThemeCssName(theme);
  htmlElement.classList.remove(previousTheme);
  htmlElement.classList.add(theme);
  previousTheme = theme;
}

export function getCurrentThemeName() {
  return ensureThemeRawName(previousTheme);
}

export function getCurrentTheme() {
  const currentThemeName = getCurrentThemeName();
  for (const theme of getThemes()) {
    if (theme.name === currentThemeName) {
      return theme;
    }
  }
  throw new Error(`Didn't find theme from current theme name.`);
}

export function getThemes() {
  if (themes) { return themes; }

  const names = getThemeNames();
  return themes = names.map(name => {
    const brightness = getDesignValue(`--ct-theme-${name}-props-brightness`) as Brightness;
    return {
      name,
      cssName: ensureThemeCssName(name),
      brightness,
    };
  });
}
