<template>
  <div class="login">
    <form v-on:submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
      <input id="username" type="text" placeholder="Enter username" class="form-control" required v-model="username">
      </div>
      <button type="submit" class="btn btn-primary">
        LOGIN
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
    }
  },
  methods: {
    login() {
      localStorage.setItem('username', this.username);
      this.$router.push('/app');
    },
  },
}
</script>

<style scoped>
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login form {
    height: 200px;
    width: 500px;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    background-color: #fff;
    padding: 20px;
  }
</style>
