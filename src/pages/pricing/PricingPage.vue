<template>
  <transition name="fade" mode="out-in">
    <div class="pricing">
      <h1>PRICING</h1>
      <div class="price-card-list">
        <PriceCard :tier="'STARTER'" :pricing="'$19'"/>
        <PriceCard :tier="'PRO'" :pricing="'$59'"/>
        <PriceCard :tier="'ENTERPRISE'" :pricing="'$99'"/>
      </div>
    </div>
  </transition>
</template>

<script>
  import PriceCard from "./PriceCard";

  export default {
    name: 'PricingPage',
    components: {
      PriceCard
    }
  };
</script>

<style scoped>
  .pricing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .price-card-list {
    display: flex;
  }


  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-active {
  opacity: 0;
  }
</style>
