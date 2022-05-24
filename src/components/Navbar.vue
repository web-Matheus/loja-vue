<template>
    <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/carrinho">
      <img src="../assets/carrinho-de-compras.png" alt="imagem carrinho de compras">
    </router-link>
    <router-link to="/masculino">Roupas masculinas</router-link> 
    <router-link to="/feminino">Roupas femininas</router-link>
    <router-link to="/joias">joias</router-link> 
    <router-link to="/eletronicos">eletronicos</router-link>  
  </nav> 
</template>
<script>
export default {
    name:"Navbar"
}
</script>
<style scoped>
  nav{
    display: flex;
    align-items: center;
    
  }
  nav, img{
    width: 30px;
    margin-left:20px ;
  }
</style>