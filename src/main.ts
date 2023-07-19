import './styles/lib/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import { setRouter } from './router'

async function bootstrap() {
    let app = createApp(App)
    await setRouter(app)
    app.mount('#app')
}

bootstrap()