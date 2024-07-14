<template>
    <form action="" @submit="enviarFormulario">
        <input type="text" placeholder="Nome" v-model="name">
        <input type="text" placeholder="E-mail" v-model="email">
        <input type="submit" value="Enviar">
    </form>
</template>
<script>
    export default{
        name: 'FormVue',
        data(){
            return{
                name: '',
                email: ''
            }
        },
        methods:{
            enviarFormulario(e){
                e.preventDefault();
                const name = this.name;
                const email = this.email;
                console.log("Formulário enviado.")
                console.log("O nome é: " + name)
                console.log("O e-mail é: " + email)

                // Ajax

                // Inserir no BdD

            }
        }
    }
</script>
<style>
</style>