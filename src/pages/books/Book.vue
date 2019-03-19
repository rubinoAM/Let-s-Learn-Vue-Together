<template>
  <div class="book">

  </div>
</template>

<script>
  export default {
    name: 'Book',
    props: {
      book: Object,
    },
  };
</script>

<style scoped>
  .book {
    border: 1px solid black;
    width: 300px;
    height: 450px;
    margin: 10px;
  }
</style>
