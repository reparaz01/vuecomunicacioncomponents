<template>
  <div>
    <h1 style="color:red">Padre Numeros</h1>
    <h2>
      La suma es: {{ suma }}
    </h2>
    <hr/>
    <button @click="generarNumero">Pulsa para generar Numero</button>
    <ul>
      <li v-for="(numero, index) in numeros" :key="index">
        <HijoNumeros :numero="numero" v-on:sumar="sumarNumero" />
      </li>
    </ul>
  </div>
</template>

<script>
import HijoNumeros from './HijoNumeros.vue';

export default {
  name: "PadreNumeros",
  components: {
    HijoNumeros
  },
  methods: {
    generarNumero() {
      const nuevoNumero = Math.floor(Math.random() * 10) + 1;
      this.numeros.push(nuevoNumero);
    },
    sumarNumero(numero) {
      this.suma += numero;
    }
  },
  data() {
    return {
      numeros: [],
      suma: 0
    };
  }
}
</script>
