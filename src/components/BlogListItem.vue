<template>
    <article class="entrada-blog">
        <div class="imagen">
            <img :src="imageSrc(blog.imgUrl)" alt="Entrada de blog">
        </div>
        <div class="texto-entrada">
            <router-link :key="$route.path" :to="{name: 'Article', params: {slug: blog.slug}}">
                <h4>{{blog.title}}</h4>
            </router-link>
            <p>Escrito el: <span>{{blog.publicationDate}}</span> por: <span>{{blog.author}}</span></p>
            <p>{{blog.description}}</p>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        blog: {
            type: Object,
            required: true
        }
    },
    methods: {
        imageSrc(image) {
            return require(`@/assets/img/${image}`);
        }
    }
}
</script>

<style>

</style>