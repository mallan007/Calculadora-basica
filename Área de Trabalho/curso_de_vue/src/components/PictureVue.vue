<template>
    <div>
        <img :src="avatar" :alt="descricao" height="550" width="700">
    </div>
</template>
<script>
    export default {
    name: 'PictureVue',
    data(){
        return {
            avatar: "/img/picture.jpg",
            descricao: "Muito gostosa"    
        }
    }
    }
</script>
<style>

</style>