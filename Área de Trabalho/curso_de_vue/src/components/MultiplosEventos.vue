<template>
    <div>
        <button @click="primeiro(txt1,$event), segundo(txt2,$event), terceiro(txt3, $event)"> Ativar múltiplos eventos </button>
        <p> {{ multiplos_eventos }} </p>
    </div>
</template>
<script>
    export default {
        name: 'MultiplosEventos',
        data() {
            return {
                multiplos_eventos:"",
                txt1:"1º evento acionado",
                txt2: "2º evento acionado"
            }
        },
        methods: {
            primeiro(txt, e){
                e.preventDefault();
                this.multiplos_eventos = txt
            },
            segundo(txt, e){
                e.preventDefault();
                setTimeout(() => this.multiplos_eventos = txt, 1000)
            },
            terceiro(txt, e){
                e.preventDefault();
                setTimeout(() => this.multiplos_eventos = "", 2000)
            }
        },
    }
</script>
<style>
    div{
        margin: 100px;
    }
</style>
