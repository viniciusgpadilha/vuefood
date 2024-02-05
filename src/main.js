import { createApp, h } from 'vue'
import BaseTemplate from './layouts/BaseTemplate'
import router from './routes'
import store from './store'

const app = createApp(BaseTemplate)

app.use(router)
app.use(store)

app.mount('#app')
