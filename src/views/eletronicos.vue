<template>
    <section class="products-container">
        <div v-for="item in data" :key="item.id" class="div-products">
       <img :src=item.image />
        <h3 id="category">{{item.category}}</h3>
        <h1 id="title">
            {{item.title}}
        </h1>
        <h4 id="price">R$ {{item.price}}</h4>
        <!-- <p>{{item.description}}</p> -->
    </div>
    </section>
</template>

<script>
export default {
    name:"Products",
    data(){
        return{
            data:[],
            img:null
        }
    },
    methods:{
        async getProducts(){
            const req = await fetch("https://fakestoreapi.com/products/category/electronics");
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
