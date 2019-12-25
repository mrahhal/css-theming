import Vue from 'vue';
import SvgClock from './svgs/svg-clock.vue';
import SvgClose from './svgs/svg-close.vue';
import SvgMoon from './svgs/svg-moon.vue';
import SvgSun from './svgs/svg-sun.vue';
import SvgGithub from './svgs/svg-github.vue';

const components = [{
  name: 'svg-clock',
  componentConfig: SvgClock,
}, {
  name: 'svg-close',
  componentConfig: SvgClose,
}, {
  name: 'svg-moon',
  componentConfig: SvgMoon,
}, {
  name: 'svg-sun',
  componentConfig: SvgSun,
}, {
  name: 'svg-github',
  componentConfig: SvgGithub,
}]

for (const c of components) {
  Vue.component(c.name, c.componentConfig.default || c.componentConfig);
}
