<template>
  <div>
    <p> {{msg}} </p>
    <div class="calculadora">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>0</div>
      <div>+</div>
      <div>-</div>
      <div>*</div>
      <div>/</div>
      <div>=</div>
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

</style>
