import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import PadreDeportes from "./components/PadreDeportes.vue";
import PadreNumeros from "./components/PadreNumeros.vue";
import ComicsComponent from "./components/ComicsComponent.vue";
import SeleccionMultiple from "./components/SeleccionMultiple.vue";
import NumeroDoble from "./components/NumeroDoble.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";


const myRoutes = [
  {
    path: "/",
    component: HomeComponent,
  },
  {
    path: "/seleccionmultiple",
    component: SeleccionMultiple,
  },
  {
    path: "/deportes",
    component: PadreDeportes,
  },
  {
    path: "/comics",
    component: ComicsComponent,
  },
  {
    path: "/numeros",
    component: PadreNumeros,
  },
  {
    path: "/numerodoble",
    component: NumeroDoble,
  },

  {
    path: '/tablamultiplicar/:numero',
    component: TablaMultiplicar,
  },

];


const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;