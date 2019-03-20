<template>
  <div class="not-found-unauthenticated">
    <TheNavbarUnauthenticated />
    <div class="not-found">
      <h1>NOT FOUND</h1>
      <RouterLink to="/">
        GO BACK TO HOME
      </RouterLink>
    </div>
  </div>
</template>

<script>
import TheNavbarUnauthenticated from '../../components/TheNavbarUnauthenticated';

export default {
  name: 'NotFoundPage',
  components: {
    TheNavbarUnauthenticated,
  },
};
</script>

<style scoped>
  .not-found-unauthenticated {
    height: 100vh;
    display: grid;
    grid-template-rows: 7% auto;
  }
  .not-found {
    background: #1e272e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .not-found h1 {
    color: #fff;
  }

  .not-found a {
    text-decoration: none;
  }
</style>
