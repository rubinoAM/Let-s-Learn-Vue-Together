<template>
  <nav class="navbar">
    <span class="navbar-brand">ROOTER BOOKSTORE</span>
    <ul>
      <li>
        <RouterLink to="/pricing">PRICING</RouterLink>
      </li>
      <li v-if="isAuthenticated">
        <RouterLink to="/books">BOOKS</RouterLink>
      </li>
      <li v-if="isAuthenticated">
        <button class="btn btn-primary" @click="logout()">LOGOUT</button>
      </li>
      <li v-if="!isAuthenticated">
        <RouterLink to="/contact">CONTACT US</RouterLink>
      </li>
      <li v-if="!isAuthenticated">
        <RouterLink to="/login">LOGIN</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'TheNavbar',
    computed: {
      isAuthenticated() {
        if (localStorage.getItem('username') !== null) {
          return true;
        }
        return false;
      },
    },
    methods: {
      logout() {
        localStorage.removeItem('username');
        this.$router.push('/login');
      },
    }
  };
</script>

<style scoped>
  .navbar {
    width: 100%;
    height: 100%;
    background: #1e272e;
    color: #fff;
    display: grid;
    grid-template-columns: 20% auto;
  }

  .navbar span {
    align-self: center;
  }

  .navbar ul {
    margin: 0;
    display: flex;
    align-items: center;
    list-style-type: none;
    align-self: center;
    justify-self: flex-end;
  }

  .navbar ul li {
    margin-right: 20px;
  }

  .navbar ul li a {
    color: #ebebeb;
    text-decoration: none;
  }

  .navbar ul li a:hover {
    color: #767cff;
    cursor: pointer;
  }

  .navbar ul li a.router-link-active {
    color: #767cff;
  }
</style>
