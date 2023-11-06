<template>
    <div>
        <ul id="menu">
              <li>
                <router-link :to="{ name: 'TablaMultiplicar', params: { numero: generarNumeroAleatorio() } }">Número Aleatorio | </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "MenuComponent",
    methods: {
        generarNumeroAleatorio() {
            return Math.floor(Math.random() * 10) + 1;
        }
    }

}
</script>

<style>
    ul#menu li {
        display: inline;
    }
</style>