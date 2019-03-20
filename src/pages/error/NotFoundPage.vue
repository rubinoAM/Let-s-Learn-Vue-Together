<template>
  <div>
    <TheNavbarUnauthenticated />
    <div class="not-found">
    <h1>NOT FOUND</h1>
    <RouterLink to="/">GO BACK TO HOME</RouterLink>
    </div>
  </div>
</template>

<script>
import TheNavbarUnauthenticated from '../../components/TheNavbarUnauthenticated'

export default {
  name: 'NotFoundPage',
  components: {
    TheNavbarUnauthenticated,
  }
}
</script>

<style scoped>
  .not-found {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
