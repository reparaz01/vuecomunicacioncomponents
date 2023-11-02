<template>
  <div>
    <h1 style="color:red">Padre Deportes Component</h1>
    <h2 style="background-color: yellow" v-if="favorito">
      Tu deporte favorito es: {{ favorito }}
    </h2>
    <ul>
      <li v-for="depor in deportes" :key="depor">
        <HijoDeportes :nombredeporte="depor" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent" />
      </li>
    </ul>
  </div>
</template>

<script>
import HijoDeportes from './HijoDeportes.vue';

export default {
  name: "PadreDeportes",
  components: {
    HijoDeportes
  },
  methods: {
    seleccionarFavoritoParent(nombre) {
      console.log("Favorito: " + nombre);
      this.favorito = nombre;
    }
  },
  data() {
    return {
      favorito: null,
      deportes: ["Surf", "Curling", "Bolos", "Petanca", "Futbol", "Peonza"]
    };
  }
}
</script>
