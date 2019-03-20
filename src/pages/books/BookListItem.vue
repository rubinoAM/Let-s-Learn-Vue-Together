<template>
  <RouterLink :to="'/app/books/' + book.id">
    <div class="book">
      <div class="book-cover" :style="'background-image: url(' + book.url + ')'" />
      <div class="description">
        <h5>{{ book.name }}</h5>
        <p>{{ book.price }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  name: 'BookListItem',
  props: {
    book: Object,
  },
};
</script>

<style scoped>
  .book {
    background: #fff;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
    width: 350px;
    height: 450px;
    margin: 10px;
    display: grid;
    grid-template-rows: 80% auto;
  }

  .book:hover {
    width: 360px;
    margin: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  .book-cover {
    background-size: cover;
  }

  .description {
    background-color: #1e272e;
    padding: 10px;
  }
</style>
