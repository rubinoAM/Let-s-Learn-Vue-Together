<template>
  <div class="book-detail">
    <RouterLink to="/app/books">
      <i class="material-icons">keyboard_arrow_left</i> Return to Books
    </RouterLink>
    <div class="book-information">
      <div class="book-image" :style="'background-image: url(' + selectedBook.url + ')'" />
      <div class="book-description">
        <h1>{{ selectedBook.name }}</h1>
        <p>{{ selectedBook.description }}</p>
        <p><strong>Price:</strong> ${{ selectedBook.price }}</p>
        <button class="btn btn-primary">
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import books from '../../assets/books';

export default {
  name: 'BookListItemViewPage',
  props: {
    id: String,
  },
  data() {
    return {
      // eslint-disable-next-line radix
      selectedBook: books.find(book => book.id === Number.parseInt(this.id)),
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
    color: #000;
    align-self: center;
    font-size: 1.5rem;
    margin-left: 20px;
    display: flex;
    align-items: center;
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
    background-color: #1e272e;
    color: #fff;
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
      margin: 100px 200px;
    }
  }
</style>
