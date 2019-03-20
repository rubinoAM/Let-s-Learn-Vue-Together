<template>
  <div class="not-found">
    <h1>NOT FOUND</h1>
    <RouterLink to="/app">
      GO BACK TO HOME
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPageAuthenticated',
};
</script>

<style scoped>
  .not-found {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .not-found a {
    text-decoration: none;
  }
</style>
