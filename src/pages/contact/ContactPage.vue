<template>
  <div class="contact">
    <h1>CONTACT US</h1>
    <p><strong>Phone:</strong> (555) 444-4444</p>
    <p><strong>Email:</strong> javascript.apharetta@gmail.com</p>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      username: '',
    };
  },
};
</script>

<style scoped>
  .contact {
    background: #1e272e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contact h1, p {
    color: #fff;
  }
</style>
