import { createApp } from 'vue'
import { createStore } from 'vuex'

import { state, mutations } from './default'
import companies from './modules/companies'
/* import cart from './modules/cart/cart'
import auth from './modules/auth/auth'
import orders from './modules/orders/orders' */

const store = createStore({
    modules: {
        companies,
    },
    state,
    mutations
})

export default store