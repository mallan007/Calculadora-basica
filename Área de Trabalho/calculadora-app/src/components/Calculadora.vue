<template>
  <div>
    <p> {{msg}} </p>
    <div class="calculadora">
      <div class="display">
        0
      </div>
      <div class="botao clear">C</div>
      <div class="botao">+/-</div>
      <div class="botao">%</div>
      <div class="botao operadores">÷</div>
      <div class="botao">7</div>
      <div class="botao">8</div>
      <div class="botao">9</div>
      <div class="botao operadores">x</div>
      <div class="botao">4</div>
      <div class="botao">5</div>
      <div class="botao">6</div>
      <div class="botao operadores">-</div>
      <div class="botao">1</div>
      <div class="botao">2</div>
      <div class="botao">3</div> 
      <div class="botao operadores">+</div>     
      <div class="botao zero">0</div>
      <div class="botao">,</div>
      <div class="botao igual">=</div>
      
      
      
    </div> 
  </div>
</template>

<script>
export default {
  name: 'Calculadora',
  data() {
    return {
      msg: 'Calculadora Web com Vue.js',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.calculadora {
  margin: 0 auto;
  width: 350px;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.display {
  grid-column: 1/5;
  background-color: rgb(10, 10, 10);
  color: rgb(241, 236, 236);
  text-align: right;
}

.zero{
  grid-column: 1/3;
  
}

.botao{
  background-color: whitesmoke;
  border: 1px solid grey;
}

.operadores{
  background-color: orange;
  border: 1px solid grey;
}

.igual{
  background-color: aquamarine;
  border: 1px solid grey;
}

.clear{
  background-color: orangered;
  border: 1px solid grey;
}

</style>
