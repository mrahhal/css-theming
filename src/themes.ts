import { getDesignValue, getThemeCssNames } from './design-values';
import { Brightness, Theme } from './models';

const htmlElement = document.getElementsByTagName('html')[0];

const DEFAULT_CATEGORY_KEY = '__DEFAULT_CATEGORY__';

const currentThemes: { [category: string]: Theme } = {};

function _getCurrentTheme(category: string | null) {
  if (category === null) { category = DEFAULT_CATEGORY_KEY; }
  return currentThemes[category];
}

function _setCurrentTheme(category: string | null, theme: Theme) {
  if (category === null) { category = DEFAULT_CATEGORY_KEY; }
  currentThemes[category] = theme;
}

let themes: Theme[];

export function initializeTheming(theme?: Theme, category: string | null = null) {
  if (!theme) {
    theme = getThemes(category)[0];
  }
  _setCurrentTheme(category, theme);
  htmlElement.classList.add(theme.cssName);
}

export function setTheme(theme: Theme) {
  const previousTheme = _getCurrentTheme(theme.category);
  htmlElement.classList.remove(previousTheme.cssName);
  htmlElement.classList.add(theme.cssName);
  _setCurrentTheme(theme.category, theme);
}

export function getCurrentTheme(category: string | null = null) {
  return _getCurrentTheme(category);
}

export function getThemes(category: string | null = null) {
  return getAllThemes().filter(t => t.category === category);
}

export function getTheme(themeName: string, category: string | null = null) {
  for (const theme of getAllThemes()) {
    if (theme.category === category && theme.name === themeName) {
      return theme;
    }
  }
  throw new Error(`Didn't find theme named '${themeName}' in category '${category}'.`);
}

export function getAllThemes() {
  if (themes) { return themes; }

  const names = getThemeCssNames();
  return themes = names.map(cssName => {
    const category = getDesignValue(`--ct-${cssName}-props-category`) as string;
    const name = getDesignValue(`--ct-${cssName}-props-name`) as string;
    const brightness = getDesignValue(`--ct-${cssName}-props-brightness`) as Brightness;
    return {
      category: category || null,
      name,
      cssName,
      brightness,
    };
  });
}
