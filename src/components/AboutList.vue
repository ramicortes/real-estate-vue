<template>
  <section class="contenedor seccion">
        <h2 class="centrar-texto fw-300">More About Us</h2>
        <div class="iconos-nosotros">
            <AboutListItem 
                v-for="item in store.items" 
                :key="item.title"
                :imgUrl="item.imgUrl"
                :title="item.title"
                :description="item.description"/>
        </div>

    </section>
</template>

<script>
import AboutListItem from '@/components/AboutListItem.vue';
import { store } from '@/const/db.js'
export default {
    components: {
        AboutListItem
    },
    data() {
        return {
            store,
        }
    }
}
</script>