<template>
    <div class="dropdown">
        <button class="dropbtn">Ordenar por:</button>
        <div class="dropdown-content">
            <h5 @click="limit5">Máx 5</h5>
            <h5 @click="sort">Crescente</h5>
            <h5>Link 3</h5>
        </div>
        </div>
    <section class="products-container">
        <div v-for="item in data" :key="item.id" class="div-products">
       <img :src=item.image />
        <h3 id="category">{{item.category}}</h3>
        <h1 id="title">
            {{item.title}}
        </h1>
        <h4 id="price">R$ {{item.price}}</h4>
        <button class="btn-price">3x de R${{new Intl.NumberFormat('en-IN',
                 { maximumSignificantDigits: 3 }).format(item.price/3)}} sem juros</button>
    <!-- O código acima pega o valor do item divide por 3 e para não ficar 
    um número tão grande deixa no maximo 3 números após a vírgula-->
        <Button/>
    </div>
    </section>
</template>

<script>
import Button from '../components/Button.vue'
export default {
    name:"Products",
    components:{
        Button
    },
    data(){
        return{
            data:[],
            img:null
        }
    },
    methods:{
        async getProducts(){
            const req = await fetch("https://fakestoreapi.com/products/category/men's clothing");
            const data = await req.json()
            console.log(data)
            this.data = data
            
        }
    },
    mounted(){
        this.getProducts()
    }
}
</script>
