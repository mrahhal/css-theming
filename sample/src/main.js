import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

const htmlElement = document.getElementsByTagName('html')[0];

let previousTheme = 'theme-default';
htmlElement.classList.add(previousTheme);

document.addEventListener('keypress', e => {
  if (e.defaultPrevented) return;

  if (e.key === 't') {
    const newTheme = previousTheme == 'theme-default' ? 'theme-default-dark' : 'theme-default';
    htmlElement.classList.remove(previousTheme);
    htmlElement.classList.add(newTheme);
    previousTheme = newTheme;
  }
});
