<template>
  <div class="profile">
    <h1>{{ username }}'s Profile</h1>
    <div class="profile-img" />
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      username: localStorage.getItem('username'),
    };
  },
}
</script>

<style scoped>
  .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .profile-img {
    height: 250px;
    width: 250px;
    background-image: url('https://api.adorable.io/avatars/285/rob.quatela@gmail.com.png');
    background-size: cover;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
  }
</style>
