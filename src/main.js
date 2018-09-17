import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-default/index.css'
import App from './App'

Vue.use(ElementUI, {locale})

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})