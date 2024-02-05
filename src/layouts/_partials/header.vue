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
                                <i class="fa-solid fa-cart-shopping"></i> (2)
                            </router-link >
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'login'}"  class="nav-link">
                                <i class="fa-solid fa-user"></i> Entrar
                            </router-link >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

