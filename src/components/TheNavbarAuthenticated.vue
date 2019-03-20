<template>
  <nav class="navbar">
    <router-link to="/app">
      <span class="navbar-brand">ROOTER BOOKSTORE</span>
    </router-link>
    <ul>
      <li>
        <router-link to="/app/profile">PROFILE</router-link>
      </li>
      <li>
        <router-link to="/app/books">BOOKS</router-link>
      </li>
      <li>
        <router-link to="/app/upgrade"><i>UPGRADE</i></router-link>
      </li>
      <li>
        <button class="btn btn-primary" @click="logout()">LOGOUT</button>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'TheNavbarAuthenticated',
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
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
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

  .navbar ul li a,
  .navbar a {
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
