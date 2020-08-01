<template>
    <main class="contenedor seccion contenido-centrado">
        <h1 class="fw-300 centrar-texto">Our Blog</h1>
            <BlogListItem
            v-for="blog in store.blogs"
            :blog="blog"
            :key="blog.id"/>
    </main>
</template>

<script>
// @ is an alias to /src
import BlogListItem from '@/components/BlogListItem.vue';
import { store } from '@/const/db.js';

export default {
  name: 'Blog',
  components: {
    BlogListItem
  },
  data() {
      return {
          store
      }
  }
}
</script>