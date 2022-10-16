import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button } from 'vant';
import { Icon } from 'vant';

const app=createApp(App)
app.use(Button)
app.use(Icon)
app.use(store).use(router).mount('#app')
