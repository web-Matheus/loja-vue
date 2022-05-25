<template>
    <nav>
    <router-link to="/">
      <img src="../assets/lar.png" 
      alt="icone lar ">
    </router-link> 
    <section class="section-icons">
      <div class="div-icons">
    <router-link to="/coracao">
      <img src="../assets/coracao.png" 
      alt="imagem carrinho de compras">
    </router-link>
    </div>
    <div class="div-icons">
    <router-link to="/carrinho">
      <img src="../assets/carrinho-de-compras.png" 
      alt="imagem carrinho de compras">
    </router-link>
    </div>
    </section>
    
    
  </nav> 
  <section class="category">
    <h1>Categorias</h1>
    <div>
    <router-link to="/masculino">Roupas masculinas</router-link> 
    <router-link to="/feminino">Roupas femininas</router-link> 
    <router-link to="/joias">joias</router-link> 
    <router-link to="/eletronicos">eletronicos</router-link> 
    </div>
    
  </section>
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
  .category{
    background-color: #3456df;
    width: 100%;
    padding: 20px;
  
  }
  .category h1{
    padding: 50px;
    font-size: 2rem;
    
  }
  .category div{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>