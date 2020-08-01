<template>
  <div class="home">
    <div class="inicio">
        <div class="contenido-header">
            <h1>Deluxe exclusive houses and appartments on sale</h1>
        </div>
    </div>
    
    <div class="contenido-inicio">
        <AboutList/>

        <main class="contenedor seccion">
            <h2 class="fw-300 centrar-texto">Our featured properties</h2>

            <div class="contenedor-anuncios">
                <PropertyListItem 
                    v-for="anuncio in featuredProperties" 
                    :key="anuncio.id"
                    :anuncio="anuncio"/>
            </div>
            <div class="ver-todas">
                <router-link class="boton boton-verde" :to="{name: 'Properties'}">See more</router-link>
            </div>
        </main>

        <TheContactCallToAction/>

        <div class="seccion-inferior contenedor seccion">
            <section class="blog">
                <h3 class="centrar-texto fw-300">Our blog</h3>
                <BlogListItem
                v-for="blog in blogs"
                :blog="blog"
                :key="blog.id"/>
            </section>
            <TheQuote/>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { store } from "@/const/db.js";
import AboutList from '@/components/AboutList.vue';
import PropertyListItem from '@/components/PropertyListItem.vue';
import TheContactCallToAction from '@/components/TheContactCallToAction.vue';
import BlogListItem from '@/components/BlogListItem.vue';
import TheQuote from '@/components/TheQuote.vue';

export default {
    name: 'Home',
    components: {
      AboutList,
      PropertyListItem,
      TheContactCallToAction,
      BlogListItem,
      TheQuote
    },
    data() {
        return {
            store
        }
    },
    computed: {
        featuredProperties() {
            return store.anuncios.filter(
                anuncio => anuncio.featured
            )
        },
        blogs() {
            return store.blogs.filter(
                blog => blog.featured
            )
        }
    }
}
</script>
