<template>
  <div class="authenticated-pages">
    <TheNavbarAuthenticated />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import TheNavbarAuthenticated from './TheNavbarAuthenticated';

export default {
  name: 'AuthenticatedPages',
  components: {
    TheNavbarAuthenticated,
  },
};
</script>

<style scoped>
  .authenticated-pages {
    height: 100vh;
    display: grid;
    grid-template-rows: 7% auto;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-active {
  opacity: 0;
  }
</style>
