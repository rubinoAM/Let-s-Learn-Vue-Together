<template>
  <div class="card">
    <div class="title">
      <h3>{{ tier }}</h3>
    </div>
    <div class="price">
      <h1>{{ pricing }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceCard',
  props: {
    tier: String,
    pricing: String,
  }
}
</script>

<style scoped>
  .card {
    height: 300px;
    width: 300px;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
    background-color: #fff;
    margin: 30px;
    display: grid;
    grid-template-rows: 30% auto;
  }

  .title {
    background-color: #767cff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title h3 {
    color: #fff;
  }

  .price {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .price h1 {
    font-size: 5rem;
  }
</style>
