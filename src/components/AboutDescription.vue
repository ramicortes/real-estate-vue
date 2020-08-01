<template>
  <main class="contenedor">
        <h1 class="fw-300 centrar-texto">About Us</h1>

        <div class="contenido-nosotros">
            <div class="imagen">
                <img :src="require(`@/assets/img/nosotros.jpg`)" alt="Imagen sobre nosotros">
            </div>
            <div class="texto-nosotros">
                <blockquote>
                    25 years of experience
                </blockquote>
                <p>Donec tristique est nec tellus interdum, at ultrices nibh dictum. Vivamus semper orci interdum nunc hendrerit fermentum. Curabitur aliquam vitae est non pretium. Donec porta pharetra urna, tempus accumsan enim. Quisque at blandit magna.
                    Sed placerat pellentesque pellentesque. Phasellus id imperdiet nulla. Aliquam erat volutpat. Vivamus lectus mi, efficitur pharetra placerat quis, rhoncus a erat. Integer blandit nisi eu pretium rhoncus. Duis ut quam sit amet lorem
                    hendrerit aliquet.</p>
                <p>Pellentesque consequat, lacus quis egestas malesuada, enim odio tincidunt mauris, euismod feugiat eros est sit amet ante. Suspendisse quis leo non ex aliquet sollicitudin vitae eget enim. Nunc vitae lacus convallis, egestas nisi quis,
                    sollicitudin elit.</p>
            </div>
        </div>
    </main>
</template>

<script>
export default {

}
</script>
