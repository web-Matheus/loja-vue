<template>
        <button class="btn-buy">comprar</button>
</template>
<script>
export default {
    name:"Button"
}
</script>
<style>
    .btn-buy{
       width: 300px;
        padding: 6px;
        margin: 6px;
        font-size: 1rem;
        font-weight: bold;
        background-color: #3456df;
        color: #fff;
        border: none;
        cursor: pointer;
    }
    .btn-buy:hover{
        opacity:0.8;
    }
    .btn-price{
        width: 300px;
        padding: 6px;
        margin: 6px;
        font-size: 1rem;
        font-weight: bold; 
        color: #222;
        border: solid #222 1px;
        cursor: pointer; 
    }
</style>