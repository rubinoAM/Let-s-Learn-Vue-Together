<template>
  <div class="book-detail">
    <RouterLink to="/app/books">Return to Books</RouterLink>
    <div class="book-information">
      <div class="book-image" :style="'background-image: url(' + selectedBook.url + ')'" />
      <div class="book-description">
        <h1>{{ selectedBook.name }}</h1>
        <p>{{ selectedBook.description }}</p>
        <p><strong>Price:</strong> ${{ selectedBook.price }}</p>
        <button class="btn btn-primary">ADD TO CART</button>
      </div>
    </div>
  </div>
</template>

<script>
  import books from '../../assets/books.js';

  export default {
    name: 'BookListItemViewPage',
    props: {
      id: String,
    },
    data() {
      return {
        selectedBook: books.find(book => book.id == Number.parseInt(this.id)),
      };
    },
  };
</script>

<style scoped>
  .book-detail {
    display: grid;
    grid-template-rows: 10% auto;
  }

  .book-detail a {
    text-decoration: none;
    align-self: center;
    font-size: 1.5rem;
    margin-left: 20px;
  }

  .book-information {
    margin: 20px;
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
    display: grid;
    grid-template-columns: 50% auto;
  }

  .book-image {
    background-size: cover;
  }

  .book-description {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .book-description button {
    width: 150px;
  }

  @media (min-width: 1200px) {
    .book-detail a {
      margin-left: 100px;
    }
    .book-information {
      margin: 100px;
    }
  }
</style>
