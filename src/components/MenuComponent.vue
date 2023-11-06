<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home |</router-link>
            </li>
            <li>
                <router-link to="/seleccionmultiple">Seleccion Mulitple | </router-link>
            </li>
            <li>
                <router-link to="/numeros">Numeros | </router-link>
            </li>

             <li>
                <router-link to="/deportes"> Deportes | </router-link>
            </li>
            <li>
                <router-link to="/comics"> Comics | </router-link>
            </li>
            <li>
                <router-link to="/numerodoble"> Numero Doble | </router-link>
            </li>

        </ul>
    </div>
</template>

<script>

export default {
    name: "MenuComponent",
}
</script>

<style>
    ul#menu li {
        display: inline;
    }
</style>