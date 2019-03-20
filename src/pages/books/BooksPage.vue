<template>
  <div class="books">
    <h4>CHOOSE FROM THE <i>"LATEST"</i> BOOKS</h4>
    <BookList />
  </div>
</template>

<script>
import BookList from './BookList';

export default {
  name: 'BooksPage',
  components: {
    BookList,
  },
};
</script>

<style scoped>
  .books {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
