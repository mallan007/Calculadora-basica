<template>
    <div>
        <img :src="avatar" :alt="descricao" height="550" width="700">
        <MudarImagem @mudar-imagem="trocarImagem"/>
    </div>
</template>
<script>
    import MudarImagem from './MudarImagem.vue';

    export default {
    name: 'PictureVue',
    components:{
        MudarImagem
    },
    data(){
        return {
            avatar: "/img/picture.jpg",
            descricao: "Muito gostosa"    
        }
    },
    methods: {
        trocarImagem(){
            this.avatar ="/img/picture3.jpg",
            console.log("Quero uma gótica rabuda.")
        }
    }
    }
</script>
<style>
.div{
    display: flex;
    align-items: center;
}
</style>