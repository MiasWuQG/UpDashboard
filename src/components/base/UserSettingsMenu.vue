<script setup lang="ts">
import { ref } from 'vue';

const settingsMenuItems = [
  { title: "Manage Account", href: "" },
  { title: "Provide Feedback", href: "" },
  { title: "Contact", href: "" },
  { title: "Help", href: "" },
  { title: "Logout", href: "" },
];

const openSettingsMenu = ref(false);

const name = "Matthias Meier";

</script>

<template>
  <!-- user ring -->
  <div class="flex items-center gap-3">
    <div
      class="w-[42px] h-[42px] rounded-full bg-white font-[Jakarta] ring-2 ring-[#2D3D3B] ring-inset flex justify-center items-center cursor-pointer relative"
      @click="openSettingsMenu = !openSettingsMenu"
    >
      <span>MW</span>
      <div
        v-if="openSettingsMenu"
        class="absolute flex flex-col top-[-205px] right-[-135px] p-2 w-[175px] h-[195px] rounded-lg text-sm backdrop-blur-lg bg-white bg-opacity-10"
      >
        <div
          v-for="setting in settingsMenuItems"
          :key="setting.title"
          class="hover:backdrop-blur-sm hover:bg-white hover:bg-opacity-5 rounded-md text-white flex items-center justify-start px-4 font-[Jakarta] text-xs h-[36px]"
        > 
          {{ setting.title }}
        </div>
      </div>
    </div>
    <div class="flex md:hidden text-white font-[Jakarta] text-sm">
      {{ name }}
    </div>
  </div>
</template>