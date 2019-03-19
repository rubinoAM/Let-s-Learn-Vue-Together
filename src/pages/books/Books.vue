<template>
  <div class="books">
    <BookList />
  </div>
</template>

<script>
  import BookList from './BookList';

  export default {
    name: 'Books',
    components: {
      BookList
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
  .books {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
