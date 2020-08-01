<template>
  <footer class="site-footer seccion">
        <div class="contenedor contenedor-footer">
            <AppNavigation/>
            <p class="copyright">All rights reserved 2019 &copy;</p>
        </div>
    </footer>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";

export default {
    components: {
        AppNavigation
    }
}
</script>