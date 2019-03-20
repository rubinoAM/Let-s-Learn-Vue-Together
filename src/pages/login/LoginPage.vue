<template>
  <transition name="fade" mode="out-in">
    <div class="login">
      <h1>LOGIN</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="Enter username"
            class="form-control"
            required
          >
        </div>
        <button type="submit" class="btn btn-primary">
          LOGIN
        </button>
      </form>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
    };
  },
  methods: {
    login() {
      localStorage.setItem('username', this.username);
      this.$router.push('/app');
    },
  },
};
</script>

<style scoped>
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #1e272e;
  }

  .login h1 {
    color: #fff;
  }

  .login form {
    height: 200px;
    width: 500px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: #fff;
    padding: 20px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
