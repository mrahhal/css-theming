const style = getComputedStyle(document.body);

export function getDesignValue(prop: string) {
  const value = style.getPropertyValue(prop);
  if (value) {
    return value.trim();
  }

  return null;
}

export function getDelimitedValue(prop: string) {
  const value = getDesignValue(prop);
  if (value) {
    return value.split(',').map(x => x.trim());
  }

  return null;
}

let swatchNames: string[];
let fgSwatchNames: string[];
let colorNames: string[];
let semanticColorNames: string[];
let themeNames: string[];

export function getSwatchNames() {
  return swatchNames || (swatchNames = getDelimitedValue('--ct-swatch-names')!);
}

export function getFgSwatchNames() {
  return fgSwatchNames || (fgSwatchNames = getDelimitedValue('--ct-fg-swatch-names')!);
}

export function getColorNames() {
  return colorNames || (colorNames = getDelimitedValue('--ct-color-names')!);
}

export function getSemanticColorNames() {
  return semanticColorNames || (semanticColorNames = getDelimitedValue('--ct-semantic-color-names')!);
}

export function getThemeNames() {
  return themeNames || (themeNames = getDelimitedValue('--ct-theme-names')!);
}
