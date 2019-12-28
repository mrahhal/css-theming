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
