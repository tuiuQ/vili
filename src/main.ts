import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import router from './router'
import vuex from './store/index'
import {create} from "domain";

const app = createApp(App)


app.use(router)
app.use(vuex)
app.mount("#app")

