<template>
  <div>
    <h1>Selección múltiple Select</h1>
    <form v-on:submit.prevent="mostrarSeleccionados">
      <select size="8" multiple v-model="opcionesSeleccionadas">
        <option v-for="opt in opciones" :key="opt">
          {{opt}}
        </option>
      </select>
      <button>
        Mostrar seleccionados
      </button>
    </form>
    <h2 style="color:blue">
      {{seleccionados}}
    </h2>
  </div>
</template>

<script>
export default {
  name: "SeleccionMultiple",
  methods: {
    mostrarSeleccionados() {
      this.seleccionados = this.opcionesSeleccionadas.join(', ');
    }
  },
  data() {
    return {
      opciones: ["A", "B", "C", "D", "E", "F", "Opción T"],
      opcionesSeleccionadas: [],
      seleccionados: ""
    };
  }
}
</script>
