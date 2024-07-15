<template>
  <PrimeiroComponente />
  <PessoaVue />
  <FormVue />

</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import PessoaVue from './components/PessoaVue.vue';
import FormVue from './components/FormVue.vue';


export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    PessoaVue,
    FormVue,
   
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  color: blueviolet;
  margin: 150px;
  background-color: rgba(0, 0, 0, 0.885);
  align-items: center;
  
}
</style>
