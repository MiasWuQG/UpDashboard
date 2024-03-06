<script setup>
import { ref } from 'vue';

const val = ref(10);
const max = ref(30);
import { CircleProgressBar } from 'vue3-m-circle-progress-bar';


</script>

<template>
  <CircleProgressBar
    :value="val"
    :max="max"
    rounded
    color-unfilled="#49D49C"
    class="w-[50px] h-[50px]"
    :stroke-width="8"
  >
    <span class="text-[10px]">
      {{ val }} / {{ max }}
    </span>
  </CircleProgressBar>
</template>