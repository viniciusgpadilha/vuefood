<template>
    <header>
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-vuefood">
            <div class="container">
                <router-link :to="{name: 'home'}">
                    <img src="@/assets/imgs/logo-vuefood.png" alt="VueFood" class="logo">
                </router-link>
                <div>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link :to="{name: 'cart'}"  class="nav-link">
                                <i class="fa-solid fa-cart-shopping"></i> ({{ productsCart.length }})
                            </router-link >
                        </li>
                        <li class="nav-item">
                            <a href="#" v-if="me.name" class="nav-link"> Olá, {{ me.name }} (<span @click.prevent="logout">Sair</span>)</a>
                            <router-link v-else :to="{name: 'login'}" class="nav-link">
                                <i class="fa-solid fa-user"></i> Entrar
                            </router-link >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            productsCart: state => state.cart.products,
            me: state => state.auth.me,
        })
    },

    methods: {
        ...mapActions([
            'logout'
        ])
    }
}
</script>

