import { createApp, h } from 'vue'
import DefaultTemplate from './layouts/DefaultTemplate'
import router from './routes'

const app = createApp(DefaultTemplate)

app.use(router)

app.mount('#app')
