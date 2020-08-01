<template>
    <div class="propiedad">
        <h1 class="fw-300 centrar-texto">{{property.name}}</h1>
        <img src="../assets/img/destacada.jpg" alt="">

        <main class="contenedor seccion contenido-centrado">
            <div class="resumen-propiedad">
                <p class="precio">{{property.price}}</p>
                <ul class="iconos-caracteristicas">
                    <PropertyListItemCommoditie v-for="detail in property.details" :key="detail.id" :detail="detail"/>
                </ul>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nunc mauris, rhoncus in diam porta, gravida aliquet odio. Ut ac urna id nisl condimentum iaculis. Quisque dignissim consequat euismod. Proin cursus nulla non tellus posuere vestibulum.
                Proin placerat turpis ac magna tincidunt posuere. Proin aliquam consectetur dolor sed porta. Ut iaculis enim consectetur turpis vulputate, nec maximus nulla auctor. Nunc accumsan leo vel lectus lobortis vulputate a vitae ex. Duis iaculis,
                leo quis blandit facilisis, dui ipsum eleifend sem, id tristique dui massa mattis nulla. Aliquam porttitor, nisl sed tristique congue, dui dui laoreet enim, mollis mollis arcu velit sed dui. Curabitur eleifend tellus non arcu egestas commodo.
                Pellentesque id enim vel nunc molestie porta at ac sem.</p>
            <p>Vivamus varius tincidunt semper. Vestibulum id facilisis mauris. Vestibulum eget metus vitae elit porttitor ultricies vitae bibendum elit. Phasellus efficitur, felis non cursus tristique, nulla erat volutpat enim, ultrices tempor orci enim eget
                elit. Maecenas in iaculis metus. Morbi a malesuada enim, eget pellentesque metus. Quisque turpis mauris, sodales vitae semper a, efficitur ut mi.</p>
            <GoBack />
        </main>
    </div>
</template>

<script>
// @ is an alias to /src
import { store } from "@/const/db.js";
import PropertyListItemCommoditie from '@/components/PropertyListItemCommoditie.vue';
import GoBack from '@/components/GoBack.vue';
export default {
  name: 'Anuncio',
  components: {
      PropertyListItemCommoditie,
      GoBack
  },
  props: {
      slug: {
          type: String,
          required: true
      }
  },
  computed: {
      property() {
          return store.anuncios.find(
              anuncio => anuncio.slug == this.slug
          )
      }
  },
  methods: {
        imageSrc(image) {
            return require(`@/assets/img/${image}`);
        }
    }
}
</script>