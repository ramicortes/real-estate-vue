<template>
    <li>
        <img :src="imageSrc(detail.icon)" alt="icono wc">
        <p>{{detail.number}}</p>
    </li>
</template>

<script>
export default {
    props: {
        detail: {
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