import { createApp, h } from 'vue'
import BaseTemplate from './layouts/BaseTemplate'
import router from './routes'

const app = createApp(BaseTemplate)

app.use(router)

app.mount('#app')
