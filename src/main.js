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

import {
  Button, Cell, CellGroup,Dialog,Toast,NavBar,Swipe, SwipeItem,
	Divider,RadioGroup,Radio,Field,Icon,Loading,CountDown,Circle,Skeleton,
} from 'vant'
Vue.use(Button).use(Cell).use(CellGroup).use(Dialog)
    .use(Toast).use(NavBar).use(Swipe).use(SwipeItem)
	.use(Divider).use(RadioGroup).use(Radio).use(Field)
	.use(Icon).use(Loading).use(CountDown).use(Circle).use(Skeleton )

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
