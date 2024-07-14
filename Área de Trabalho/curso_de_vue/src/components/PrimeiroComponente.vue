<template>
 <div>
  <h1> Bem vindo ao Vue, meu consagrado.</h1>
  <!--<p> Meu nome é {{ nome }}.</p> -->
  <MultiplosEventos />
 </div>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue';

export default {

  name: 'PrimeiroComponente',
  components: {
    MultiplosEventos
  },
  data(){
    return{
    nome: 'Allan'
    }
  }
}
</script>

<style scoped>

</style>
