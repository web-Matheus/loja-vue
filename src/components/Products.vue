<template>
    <section class="products-container">
        <div v-for="item in data" :key="item.id" class="div-products">
            
                <img :src=item.image />
                <!-- <h3 id="category">{{item.category}}</h3> -->
                <h1 id="title">
                    {{item.title}}
                </h1>
                <h4 id="price">R$ {{item.price}}</h4>
                <Button/>
    </div>
    </section>
</template>

<script>
import Button from './Button.vue'
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
            const req = await fetch("https://fakestoreapi.com/products");
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

<style>
.products-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.div-products{
    width: 300px;
    height: 300px;
    margin: 20px auto;
    box-shadow: 0px 0px 5px hsl(0deg 0% 0% );
    border-radius:10px;
   
}
.products-container img{
    width: 100px;
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
    color: #fcba03;
}
</style>