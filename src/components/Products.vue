<template>
    <section class="products-container">
        <div v-for="item in data" :key="item.id" class="div-products">
        <img src="https://www.folhavitoria.com.br/entretenimento/blogs/du-ponto-de-vista-masculino/wp-content/uploads/2016/05/camiseta-adidas-clima-training-masculina-img.jpg" 
        alt="">
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
    max-width: 100%;
}
.div-products{
    width: 300px;
    height: 500px;
    margin: auto;
    margin-bottom: 50px;
    border: 1px solid #222;
    
}
.products-container img{
    width: 100%;
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