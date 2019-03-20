<template>
  <nav class="navbar">
    <router-link to="/">
      <i class="material-icons">bookmarks</i>
      <span class="navbar-brand">ROOTER BOOKSTORE</span>
    </router-link>
    <ul>
      <li>
        <router-link to="/pricing">
          PRICING
        </router-link>
      </li>
      <li>
        <router-link to="/contact">
          CONTACT
        </router-link>
      </li>
      <li>
        <router-link to="/login">
          LOGIN
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbarUnauthenticated',
};
</script>

<style scoped>
  .navbar {
    width: 100%;
    height: 100%;
    background: transparent;
    color: #000;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
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

  .navbar ul li a,
  .navbar a {
    color: #000;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  .navbar a i {
    margin-right: 10px;
  }

  .navbar ul li a:hover {
    color: #767cff;
    cursor: pointer;
  }

  .navbar ul li a.router-link-active {
    color: #767cff;
  }
</style>
