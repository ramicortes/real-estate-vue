<template>
    <div class="centrar-texto">
        <a class="boton boton-verde" @click="goBack()">Back to properties</a>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            return this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>