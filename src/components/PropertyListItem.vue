<template>
    <div class="anuncio">
        <img :src="imageSrc(anuncio.imgUrl)" alt="Anuncio casa de lujo">
        <div class="contenido-anuncio">
            <h3>{{anuncio.name}}</h3>
            <p>{{anuncio.description}}</p>
            <p class="precio">{{anuncio.price}}</p>
            <ul class="iconos-caracteristicas">
                    <PropertyListItemCommoditie v-for="detail in anuncio.details" :key="detail.id" :detail="detail"/>
            </ul>
            <router-link class="boton boton-amarillo d-block" :key="$route.path" :to="{name: 'Property', params: {slug: anuncio.slug}}">See property details</router-link>
        </div>
    </div>
</template>

<script>
import PropertyListItemCommoditie from '@/components/PropertyListItemCommoditie.vue';

export default {
    props: {
        anuncio: {
            type: Object,
            required: true
        }
    },
    components: {
        PropertyListItemCommoditie
    },
    methods: {
        imageSrc(image) {
            return require(`@/assets/img/${image}`);
        }
    }
}
</script>
