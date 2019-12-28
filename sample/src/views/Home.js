import {
  getColorNames,
  getSemanticColorNames,
  getSwatchNames,
  getThemes,
} from 'css-theming';

export default {
  data: function () {
    return ({
      themes: getThemes(),
      colorNames: getColorNames(),
      swatchNames: getSwatchNames(),
      semanticColorNames: getSemanticColorNames(),
    });
  },
  computed: {
    themesText: function () {
      return this.themes.map(t => `${t.name} (css: ${t.cssName}) (brightness: ${t.brightness})`).join('; ');
    },
  }
};
