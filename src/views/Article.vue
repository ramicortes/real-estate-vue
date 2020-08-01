<template>
    <div class="articulo">
        <h1 class="fw-300 centrar-texto">{{article.title}}</h1>

        <main class="contenedor seccion contenido-centrado texto-entrada articulo">
            <img class="full-width-image" :src="require(`@/assets/img/${article.imgUrl}`)" alt="">
            <p>Written on: <span>{{article.publicationDate}}</span> by: <span>{{article.author}}</span></p>
            <p v-for="paragraph in article.paragraphs" :key="paragraph">{{paragraph}}</p>
        </main>
    </div>
</template>

<script>
// @ is an alias to /src
import { store } from "@/const/db.js"
export default {
  name: 'Articulo',
  data() {
      return {
          store
      }
  },
  props: {
      slug: {
          type: String,
          required: true
      }
  },
  computed: {
      article() {
          return store.blogs.find(
              article => article.slug == this.slug
          )
      }
  }
}
</script>