<template>
  <div class="nosotros">
    <AboutDescription/>
    <AboutList/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutList from '@/components/AboutList.vue';
import AboutDescription from '@/components/AboutDescription.vue';

export default {
  name: 'Nosotros',
  components: {
    AboutList,
    AboutDescription
  }
}
</script>