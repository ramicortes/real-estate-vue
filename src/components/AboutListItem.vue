<template>
    <div class="icono">
        <img :src="imageSrc(imgUrl)" alt="Icono seguridad">
        <h3>{{title}}</h3>
        <p>{{description}}</p>
    </div>
</template>

<script>
export default {
    props: {
        imgUrl: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
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
