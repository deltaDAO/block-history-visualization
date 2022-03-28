<template>
  <div
    class="grid grid-cols-12 grid-flow-row w-full h-full container mx-auto relative"
  >
    <div class="grid grid-cols-12 grid-flow-col w-full h-full absolute -z-10">
      <div class="col-start-1 col-span-1 w-full h-full bg-base-200"></div>
      <div class="col-start-2 col-end-8 w-full h-full"></div>
      <div class="col-start-9 col-span-4 w-full h-full md:bg-secondary"></div>
    </div>
    <app-navbar class="col-start-2 col-end-8" />
    <Nuxt class="col-start-2 col-span-11 px-4" />
    <app-footer class="col-start-1 col-span-12" />
  </div>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue'
import AppNavbar from '~/components/AppNavbar.vue'
export default {
  components: { AppNavbar, AppFooter },
}
</script>

<style>
html {
  font-family: 'Overpass', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
