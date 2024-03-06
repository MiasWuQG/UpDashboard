<script setup lang='ts'>
import { ref, watch } from 'vue';
import DashboardIcon from '../icons/DashboardIcon.vue';
import ResourcesIcon from '../icons/ResourcesIcon.vue';
import PlaygroundIcon from '../icons/PlaygroundIcon.vue';
import JobsIcon from '../icons/JobsIcon.vue';
import LlmIcon from '../icons/LlmIcon.vue';
import UserSettingsMenu from './UserSettingsMenu.vue';
import BurgerMenuIcon from '../icons/BurgerMenuIcon.vue';



const navigationItems = ref([
  { title : "Dashboard", icon: DashboardIcon, to: "/", isHovering: false },
  { title : "Resources", icon: ResourcesIcon, to: "/resources", isHovering: false },
  { title : "Playground", icon: PlaygroundIcon, to: "/playground", isHovering: false },
  { title : "Jobs", icon: JobsIcon, to: "/jobs", isHovering: false },
  { title : "LLM x HybridSolver", icon: LlmIcon, to: "/llm", isHovering: false },
]);

const openNav = ref(false);

watch(openNav, () => {
  openNav.value ? document.body.classList.add("overfl") :document.body.classList.remove("overfl"); 
});
</script>

<template>
  <!-- desktop -->
  <div class="hidden md:flex min-h-screen min-w-[70px] bg-white bg-opacity-5 flex-col justify-between items-center py-4">
    <div class="flex flex-col gap-10">
      <router-link to="/">
        <img src="../../assets/images/logo.png">
      </router-link>
      <div class="flex flex-col gap-4">
        <div
          v-for="navItem in navigationItems"
          :key="navItem.title"
          class="flex justify-center"
        >
          <router-link
            :to="navItem.to"
            class="relative w-[38px] h-[38px] flex items-center justify-center rounded-md "
            @mouseover="navItem.isHovering = true"
            @mouseout="navItem.isHovering = false"
          >
            <div class="hover:bg-[#42504A] bg-opacity-100 w-[38px] h-[38px] flex items-center justify-center rounded-md relative z-50">
              <component
                :is="navItem.icon"
                class="z-50"
              />
            </div>
            <div
              v-if="navItem.isHovering"
              class="font-[Jakarta] min-w-[100px] whitespace-nowrap flex flex-nowrap absolute z-0 px-4 left-[33px] rounded-l-none rounded-md h-[38px] items-center justify-center text-white text-sm backdrop-blur-xl bg-white bg-opacity-10"
            >
              {{ navItem.title }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <UserSettingsMenu />
  </div>
  <!-- mobile -->
  <div
    class="flex md:hidden mb-10 items-center w-full relative z-50"
  >
    <BurgerMenuIcon
      class="z-50 mt-10"
      :class="{'mx-4' : !openNav, 'ml-auto mr-4 mt-10' : openNav}"
      :open-nav="openNav"
      @click="openNav = !openNav"
    />
    <div
      class="w-full bg-[#0C1E16] overflow-hidden absolute flex flex-col items-start left-0 top-0 transition-all duration-200"
      :class="{'h-screen overflow-hidden' : openNav, 'h-[0px]' : !openNav}"
    >
      <router-link
        to="/"
        class="max-w-[100px] inline mt-2"
      >
        <img src="../../assets/images/logo.svg">
      </router-link>
      <div class="flex flex-col gap-4 py-5 px-3 w-screen h-4/5 justify-between">
        <div class="flex flex-col gap-4">
          <div
            v-for="navItem in navigationItems"
            :key="navItem.title"
            class="flex justify-start backdrop-blur-xl bg-white bg-opacity-10 rounded-md rounded-l-none"
          >
            <router-link
              :to="navItem.to"
              class="relative w-full h-[54px] flex items-center justify-start rounded-md "
              @click="openNav = false"
            >
              <div class="bg-[#42504A] bg-opacity-100 w-[54px] h-[54px] flex items-center justify-center rounded-md relative z-50">
                <component
                  :is="navItem.icon"
                  class="z-50"
                />
              </div>
              <div
                class="font-[Jakarta] whitespace-nowrap flex flex-nowrap absolute z-0 px-4 left-[51px] rounded-l-none rounded-md h-[54px] items-center justify-center text-white text-sm"
              >
                {{ navItem.title }}
              </div>
            </router-link>
          </div>
        </div>
        <UserSettingsMenu />
      </div>
    </div>
  </div>
</template>

<style>
.mobile-naw-wrap {
  background: rgb(46,134,137);
  background: radial-gradient(circle, rgba(46,134,137,0.029871323529411797) 0%, rgba(73,212,156,0.1419161414565826) 0%, rgba(70,204,150,0.15312062324929976) 0%, rgba(60,174,128,0.08) 1%, rgba(0,0,0,0.029871323529411797) 200%);
  background-size: 100%;
  background-position: right;
  background-repeat: no-repeat;
}

.overfl {
  overflow:hidden;
}
</style>