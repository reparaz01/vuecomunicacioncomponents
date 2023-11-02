<template>
  <div>
    <h2 style="color:blue">
      Numero: {{ numero }}
    </h2>
    <button @click="sumar">Sumar</button>
  </div>
</template>

<script>
export default {
  name: "HijoNumeros",
  props: ["numero"],
  methods: {
    sumar() {
      this.$emit("sumar", this.numero);
    }
  }
}
</script>
