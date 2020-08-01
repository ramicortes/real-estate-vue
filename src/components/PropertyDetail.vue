<template>
  <div class="detalle-propiedad">
    <h1 class="fw-300 centrar-texto">{{property.title}}</h1>
    <img :src="imageSrc('destacada.jpg')" alt="">

    <main class="contenedor seccion contenido-centrado">
        <div class="resumen-propiedad">
            <p class="precio">{{property.price}}</p>
            <ul class="iconos-caracteristicas">
                <li>
                    <img :src="images[property.icono_wc]" alt="icono wc">
                    <p>3</p>
                </li>
                <li>
                    <img :src="images[property.icono_estacionamiento]" alt="icono estacionamiento">
                    <p>3</p>
                </li>
                <li>
                    <img :src="images[property.icono_dormitorio]" alt="icono dormitorio">
                    <p>3</p>
                </li>
            </ul>
        </div>
        <p v-for="descriptionParagraph in property.description" :key="descriptionParagraph.id">{{descriptionParagraph}}</p>
    </main>
  </div>
</template>

<script>
export default {
    props: {
        property: {
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