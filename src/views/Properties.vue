<template>
    <main class="contenedor seccion">
        <h2 class="fw-300 centrar-texto">All our on-sale properties</h2>

        <div class="contenedor-anuncios">
            <PropertyListItem 
                v-for="anuncio in store.anuncios" 
                :key="anuncio.id"
                :anuncio="anuncio"/>
        </div>
    </main>
</template>

<script>
// @ is an alias to /src
import PropertyListItem from '@/components/PropertyListItem.vue';
import { store } from "@/const/db.js"

export default {
  name: 'Nosotros',
  components: {
    PropertyListItem
  },
  data() {
        return {
            store,
        }
    }
}
</script>