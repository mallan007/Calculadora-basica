<template>
 <h2> Esta é a descrição de: {{ nome }}. <br> Que atualmente é: {{ profissao }}. <br> </h2>
</template>
<script>
    export default {
        name: 'PessoaVue',
        data(){
            return {
                nome: 'Allan',
                profissao: 'Estudante'
            }
        }
    }
</script>
<style>
</style>