<template>
  <div>
    <h2 style="color:blue">
      {{ nombredeporte }}
    </h2>
    <button @click="seleccionarFavorito">
      Seleccionar favorito
    </button>
  </div>
</template>

<script>
export default {
  name: "HijoDeportes",
  props: ["nombredeporte"],
  methods: {
    seleccionarFavorito() {
      console.log("Favorito seleccionado");
      this.$emit("seleccionarFavoritoParent", this.nombredeporte);
    }
  },
  mounted() {
    console.log(this.nombredeporte);
  }
}
</script>
