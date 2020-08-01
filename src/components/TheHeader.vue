<template>
  <header :class="`site-header ${getHomeClass}`">
            <div class="contenedor barra">
                <a href="/">
                    <img :src="imageSrc('logo.svg')" alt="Logotipo de bienes raíces">
                </a>

                <AppNavigation/>
            </div>
    </header>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";

export default {
    components: {
        AppNavigation
    },
    computed: {
        isHomeRoute() {
            return this.$route.name === 'Home';
        },
        getHomeClass() {
            return this.isHomeRoute ? 'transparent' : '';
        }
    },
    methods: {
        imageSrc(image) {
            return require(`@/assets/img/${image}`);
        }
    }
}
</script>
