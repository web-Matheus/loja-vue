<template>
    <section id="burger-table">
        <div>
            <div id="burger-table-heading">
              <div>Cliente:</div> 
              <div>Item:</div>
              <div>Preço:</div>
              <div>Status:</div>
            </div>
        </div>
        <div id="burger-table-rows">
          <div class="burger-table-row" v-for="itens in data"
          :key="itens.id">
              <div class="order-number">{{itens.id}}</div>
              <div>s{{itens.title}}</div>
              <div>{{itens.price}}</div>
              <div>solicitado</div>
              <div>
                  <button class="delete-btn"
                  @click="deletePedido(itens.id)"
                  >Cancelar</button>
              </div>
          </div>  
        </div>
    </section>
</template>
<script>
export default {
    name:"Dashboard",
    data(){
      return{
          data:[]
      }  
    },
    methods:{
        async getPedidos(){
            const req = await fetch("http://localhost:3000/pedidos");
            const data = await req.json();
            this.data = data
        },
        async deletePedido(id){
           const req = await fetch(`http://localhost:3000/pedidos/${id}`,{
               method:"DELETE"
           });
           const res = await req.json();
           this.getPedidos()
        }
    },
    mounted(){
        this.getPedidos()
    }}
</script>

<style scoped>
    #burger-table{
        max-width: 1200px;
        margin: 0 auto;
        background-color: #3456df;
    }
    #burger-table-heading,
    #burger-table-rows,
    .burger-table-row{
        display: flex;
        flex-wrap: wrap;
    }
    #burger-table-heading{
        font-weight: bold;
        padding: 12px;
        border-bottom: 3px solid #333;
    }
    #burger-table-heading div,
    .burger-table-row div{
        width: 19%;
    }
    .burger-table-row{
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
    }
    #burger-table-heading .order-id
    .burger-table-row .order-number{
        width: 5%;
    }
    select{
        padding: 12px 6px;
        margin-right: 12px;
    }
    .delete-btn{
       background-color: #222; 
       color: #ccc;
       font-weight: bold;
       border: 2px solid #222;
       padding: 10px;
       font-size: 16px;
       margin: 4px auto;
       cursor: pointer;
       transition: .5s;
    }
    .delete-btn:hover{
        background-color: transparent;
        color: #222;
    }
</style>