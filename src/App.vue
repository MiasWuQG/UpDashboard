<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppNavigation from './components/base/AppNavigation.vue';
</script>

<template>
  <div class="flex bg-black relative">
    <div class="absolute rame w-full min-h-screen h-full" />
    <div class="relative z-10 flex flex-col md:flex-row min-h-screen w-full">
      <AppNavigation />
      <RouterView v-slot="{ Component }">
        <transition
          name="fade"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
  </div>
</template>

<style scoped>
.rame {
  background: rgb(46,134,137);
  background: radial-gradient(circle, rgba(46,134,137,0.029871323529411797) 0%, rgba(73,212,156,0.1419161414565826) 0%, rgba(70,204,150,0.15312062324929976) 0%, rgba(60,174,128,0.08) 80%, rgba(0,0,0,0.029871323529411797) 100%);
  background-size: 170%;
  background-position: right;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>