<template>
  <div class="books">
    <BookList />
  </div>
</template>

<script>
  import BookList from './BookList';

  export default {
    name: 'BooksPage',
    components: {
      BookList
    },
  };
</script>

<style scoped>
  .books {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
