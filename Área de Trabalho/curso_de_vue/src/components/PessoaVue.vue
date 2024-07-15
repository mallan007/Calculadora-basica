<template>
<div> 
    <h2> Esta é a descrição de: {{ nome }}. <br> Que atualmente é: {{ profissao }}. <br> </h2>
    <InfoVue :email="email" :esta_trabalhando=true /> 
</div>

<!--Inserção da chave com o valor de props; v-bind na chave e-mail e pega o valor que será repassado por "email"-->
</template>
<script>
    import InfoVue from './InfoVue.vue';
    export default {
        name: 'PessoaVue',
        components:{
            InfoVue
        },
        data(){
            return {
                nome: 'Allan',
                profissao: 'Estudante',
                email: 'allanqueiroz.eng@gmail.com',
            }
        }
    }
</script>
<style>
</style>