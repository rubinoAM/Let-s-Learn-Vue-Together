<template>
  <div class="book-list">
    <BookListItem v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script>
import BookListItem from './BookListItem';
import books from '../../assets/books';

export default {
  name: 'BookList',
  components: {
    BookListItem,
  },
  data() {
    return {
      books,
    };
  },
};
</script>

<style scoped>
  .book-list {
    display: flex;
    justify-content: center;
  }
</style>
