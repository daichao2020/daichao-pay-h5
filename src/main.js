import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import 'vant/lib/icon/local.css';
import '@/assets/styles/index.scss';

/**缓动 */
import tween from "./plugins/tween";
Vue.use(tween);

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
import '@/permission' // permission control

import {
    Button, Cell, CellGroup,Dialog,Toast,NavBar,Swipe, SwipeItem,
    Divider,RadioGroup,Radio,Field,Icon,Loading,CountDown,Circle,Skeleton,Form,Picker,Popup,
    Tabbar,TabbarItem,Empty,List,Uploader,PullRefresh,NoticeBar
} from 'vant'
Vue.use(Button).use(Cell).use(CellGroup).use(Dialog).use(Toast).use(NavBar).use(Swipe).use(SwipeItem)
    .use(Divider).use(RadioGroup).use(Radio).use(Field).use(Icon).use(Loading).use(CountDown).use(Circle)
    .use(Skeleton).use(Form).use(Picker).use(Popup).use(Tabbar).use(TabbarItem).use(Empty)
    .use(List).use(Uploader).use(PullRefresh).use(NoticeBar)

Vue.config.productionTip = false

import {i18n, vantLocales} from './i18n/index'
console.log('当前的语言是：', i18n.locale)
// vant-ui组件国际化
vantLocales(i18n.locale)





new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
