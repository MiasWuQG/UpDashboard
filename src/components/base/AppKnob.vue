<script setup>
import { ref } from 'vue';

const val = ref(10);
const max = ref(30);
import { CircleProgressBar } from 'circle-progress.vue';



</script>

<template>
  <CircleProgressBar
    :value="val"
    :max="max"
    rounded
    color-unfilled="#49D49C"
    class="w-[50px] h-[50px]"
    :stroke-width="8"
    :color-back="'#57635E'"
  >
    <span class="text-[10px]">
      {{ val }} / {{ max }}
    </span>
  </CircleProgressBar>
</template>