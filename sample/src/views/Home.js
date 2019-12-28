import {
  getColorNames,
  getSemanticColorNames,
  getSwatchNames
} from 'css-theming';

export default {
  data: () => ({
    colorNames: getColorNames(),
    swatchNames: getSwatchNames(),
    semanticColorNames: getSemanticColorNames(),
  }),
};
