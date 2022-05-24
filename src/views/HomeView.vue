<template>
  <section class="main-container">
    <h1>Home view loja</h1>
    <!-- aqui eu importo os outros components -->
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
