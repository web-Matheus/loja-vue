<template>
    <nav>
    <router-link to="/">
      <img src="../assets/lar.png" 
      alt="icone lar ">
    </router-link> 
    <section class="section-icons">
        <div class="div-icons">
        <img src="../assets/coracao.png" 
        alt="icone de coração">
      </div>
      <div class="div-icons">
      <router-link to="/pedidos">
        <img src="../assets/carrinho-de-compras.png" 
        alt="imagem carrinho de compras">
      </router-link> 
      </div>
   
    </section>
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
    justify-content: space-between;
    background-color: #3456df;
    width: 100%;
    padding: 20px;
    border-bottom: 2px solid #222;
  }
  nav,.section-icons{
    display: flex;
  }
  /* imagem do carrinho */
  .div-icons{
    border-left: solid #222;
    padding: 20px;
    
  }
  img{
    width: 40px;
  }
</style>