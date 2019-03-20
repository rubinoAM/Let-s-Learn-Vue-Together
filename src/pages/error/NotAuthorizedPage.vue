<template>
  <div class="not-authorized">
    <TheNavbarUnauthenticated />
    <h1>NOT AUTHENTICATED</h1>
    <RouterLink to="/login">
      GO BACK TO LOGIN
    </RouterLink>
  </div>
</template>

<script>
import TheNavbarUnauthenticated from '../../components/TheNavbarUnauthenticated';

export default {
  name: 'NotAuthorizedPage',
  components: {
    TheNavbarUnauthenticated,
  },
};
</script>

<style scoped>
</style>
