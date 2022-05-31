<template>
  <section class="main-container">
    <Products/>
   <Footer/>
  </section>
</template>

<script>

import Products from '../components/Products.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    Footer,
    Products
  }
}
</script>
