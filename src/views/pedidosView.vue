<template>
  <main>
    <h1>Gerenciar pedidos</h1>
    <Dashboard/>
  </main>
</template>
<script>
import Dashboard from '../components/Dashboard.vue'
export default {
  name:"pedidos",
  components:{
    Dashboard
  }
}
</script>
<style scoped>
h1{
  color: #222;
}
</style>