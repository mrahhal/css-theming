import {
  getColorNames,
  getFgSwatchNames,
  getSemanticColorNames,
  getSwatchNames,
  getThemes
} from 'css-theming';

export default {
  data: function () {
    return ({
      themes: getThemes(),
      colorNames: getColorNames(),
      swatchNames: getSwatchNames(),
      fgSwatchNames: getFgSwatchNames(),
      semanticColorNames: getSemanticColorNames(),
    });
  },
};
