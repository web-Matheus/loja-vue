<template>
    <section class="category">
    <h1>Categorias</h1>
    <div>
    <router-link to="/masculino">
        <h5>Roupas masculinas</h5>
    </router-link> 
    <router-link to="/feminino">
        <h5>Roupas femininas</h5>
     </router-link> 
    <router-link to="/joias">
    <h5>joias</h5>
    </router-link> 
    <router-link to="/eletronicos">
    <h5>eletronicos</h5>
    </router-link> 
    </div>
    
  </section>
</template>
<script>
export default {
    name:"Banner"
}
</script>
<style scoped>
    .category{
    background-image: url('../assets/loja-de-roupas-arara.jpg');
    background-position:0 -550px ;
    background-size: cover;
    width: 100%;
    height: 50vh;
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
  .category div h5{
    background: #222;
    padding: 6px;
    border-radius: 10px;
  }
  @media only screen and (min-width:700px){
    .category{
      background-position: 0 -230px;
      background-size: cover;
      }
    .category h1{
      font-size: 4rem;
    }
    .category div h5{
      font-size: 1rem;
    }
    .category div h5{
      padding: 10px;
    }
  }
</style>