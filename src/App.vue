<template>
  <div id="app">
    <TheHeader />
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity .5s, transform .5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
