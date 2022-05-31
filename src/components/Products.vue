<template>
    <Banner/>
        <div class="dropdown">
        <button class="dropbtn">Ordenar por:</button>
        <div class="dropdown-content">
            <h5 @click="limit5">Máx 5</h5>
            <h5 @click="sort">Crescente</h5>
        </div>
        </div>
    <section class="products-container">
        <div v-for="item in data" :key="item.id" class="div-products">
                <img :src=item.image value="item.img"/>
                <h1 id="title" value="item.title">
                    {{item.title}}
                </h1>
                <h4 id="price">R$ {{item.price}}</h4>
                <button class="btn-price">3x de R${{new Intl.NumberFormat('en-IN',
                 { maximumSignificantDigits: 3 }).format(item.price/3)}} sem juros</button>
               <Button @click="createPedido"/>
        </div>
    </section>
</template>

<script>
import Button from './Button.vue'
import Banner from './Banner.vue'
export default {
    name:"Products",
    components:{
        Button,
        Banner
    },
    data(){
        return{
            data:[]
        }
    },
    methods:{
        async getProducts(){
            const req = await fetch("https://fakestoreapi.com/products");
            const data = await req.json()
            this.data = data
        },
        async createPedido(e){
            e.preventDefault()
        const data = {
            title:'men casual t-shirt',
            price:'55',
            status:"Solicitado"
        }
       const dataJson = JSON.stringify(data);
       const req = await fetch("http://localhost:3000/pedidos",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: dataJson
       });
       const res= await req.json();
       console.log(res)


        },
        async limit5(){
            const req = await fetch("https://fakestoreapi.com/products?limit=5");
            const data = await req.json()
            this.data = data
        },
        async sort(){
            const req = await fetch('https://fakestoreapi.com/products?sort=desc')
            const data = await req.json()
            this.data = data
        }
    },
    mounted(){
        this.getProducts()
    }
}
</script>

<style>
.dropbtn {
  background-color: #3456df;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content h5 {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor:pointer;
}

.dropdown-content h5:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {opacity:.7;}
.products-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 50px 0 50px 0;
}

.div-products{
    width: 300px;
    height: 300px;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
   
}
.products-container img{
    width: 90px;
    margin-bottom: 1rem;
}
.products-container #category{
    color:#222;
}
.products-container #title{
    color: #111;
    font-size: 1.2rem;
    max-width: 100%;
}
.products-container #price{
    color: #3456df;
    font-weight: bold;
}
</style>