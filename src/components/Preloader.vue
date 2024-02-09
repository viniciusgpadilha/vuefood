<template>
    <div class="preloader" v-if="preloder">
        <img src="@/assets/imgs/preloader.gif" alt="Carregando...">
        <p>{{ textPreloader }}</p>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      preloader: state => state.preloader,
      textPreloader: state => state.textPreloader
    })
  }
}
</script>