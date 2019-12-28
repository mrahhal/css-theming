import { getThemeNames } from './design-values';

const htmlElement = document.getElementsByTagName('html')[0];

let previousTheme: string;

function validateThemeName(theme: string) {
  for (const t of getThemeNames()) {
    if (t == theme) {
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

export function getTheme() {
  return ensureThemeRawName(previousTheme);
}

export function ensureThemeRawName(theme: string) {
  if (theme.indexOf('theme-') < 0) {
    return theme;
  }

  return theme.substring('theme-'.length, theme.length);
}

export function ensureThemeCssName(theme: string) {
  if (theme.indexOf('theme-') === 0) {
    return theme;
  }

  return `theme-${theme}`;
}
