<template>
  <div class="book-list">
    <Book v-for="book in books" :key="book.id"/>
  </div>
</template>

<script>
  import Book from './Book';

  export default {
    name: 'BookList',
    components: {
      Book
    },
    data() {
      return {
        books: [
          {
            id: 1,
            name: 'JavaScript 1'
          },
          {
            id: 2,
            name: 'JavaScript 1'
          },
          {
            id: 3,
            name: 'JavaScript 1'
          },
          {
            id: 4,
            name: 'JavaScript 1'
          }
        ]
      };
    }
  };
</script>

<style scoped>
  .book-list {
    display: flex;
    justify-content: center;
  }
</style>
