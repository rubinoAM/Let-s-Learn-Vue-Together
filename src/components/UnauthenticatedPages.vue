<template>
  <div class="unauthenticated-pages">
    <TheNavbarUnauthenticated />
    <router-view />
  </div>
</template>

<script>
import TheNavbarUnauthenticated from './TheNavbarUnauthenticated';

export default {
  name: 'UnauthenticatedPages',
  components: {
    TheNavbarUnauthenticated,
  },
};
</script>

<style scoped>
  .unauthenticated-pages {
    height: 100vh;
    display: grid;
    grid-template-rows: 7% auto;
  }
</style>
