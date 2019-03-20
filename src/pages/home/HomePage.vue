<template>
  <div class="home">
    <i class="material-icons">book</i>
    <h1>WELCOME HOME</h1>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .home i {
    font-size: 5rem;
    margin-bottom: 20px;
  }
</style>
