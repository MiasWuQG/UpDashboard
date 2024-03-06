<script setup lang='ts'>
import AppKnob from '../base/AppKnob.vue';
import TooltipIcon from '../icons/TooltipIcon.vue';

defineProps({
    openModal : {
        type: Boolean,
        required: false,
        default: false,

    },
});

defineEmits(['closeModal']);

import CloseIcon from '../icons/CloseIcon.vue';

</script>

<template>
  <div
    v-if="openModal"
    :modal="false"
    class="w-[230px] text-white rounded-md absolute px-6 pt-7 pb-4 top-0 right-0 backdrop-blur-3xl z-10 bg-white/5 bg-opacity-10 border  border-white/5"
  >
    <CloseIcon
      class="cursor-pointer absolute right-3 top-4"
      @click="$emit('closeModal')"
    />
    <div class="flex justify-between items-start">
      <span class="text-base font-[Jakarta] pt-4">Your Free Plan</span>
      <div class="flex items-center justify-around flex-col gap-2">
        <AppKnob />
        <span class="text-[10px]">Unit Renewal</span>
      </div>
    </div>
    <div class="flex flex-col items-start justify-center gap-4 py-4">
      <div class="flex w-full gap-2 flex-col">
        <div class="flex w-full gap-2">
          <span class="text-[10px]">MIP Runtime Limit</span>
          <div class="group relative">
            <TooltipIcon />
            <div class="absolute hidden min-w-[250px] group-hover:flex py-2 px-3 border border-white/10 rounded-md bg-[#394A43] z-10 text-[12px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </div>
        </div>
        <input
          type="text"
          value="1200"
          readonly
          class="w-[165px] h-[35px] rounded-md border border-white/20 bg-white/5 px-3 text-[10px] outline-none"
        >
      </div>
      <div class="flex w-full gap-2 flex-col">
        <div class="flex w-full gap-2">
          <span class="text-[10px]">QUBO Variable Limit</span>
          <div class="group relative">
            <TooltipIcon />
            <div class="absolute hidden min-w-[250px] group-hover:flex py-2 px-3 border border-white/10 rounded-md bg-[#394A43] z-10 text-[12px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </div>
        </div>
        <input
          type="text"
          value="30"
          readonly
          class="w-[165px] h-[35px] rounded-md border border-white/20 bg-white/5 px-3 text-[10px] outline-none"
        >
      </div>
      <div class="flex w-full gap-2 flex-col">
        <div class="flex w-full gap-2">
          <span class="text-[10px]">Monthly Compute Hours</span>
          <div class="group relative">
            <TooltipIcon />
            <div class="absolute hidden min-w-[250px] group-hover:flex py-2 px-3 border border-white/10 rounded-md bg-[#394A43] z-10 text-[12px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </div>
        </div>
        <input
          type="text"
          value="50"
          readonly
          class="w-[165px] h-[35px] rounded-md border border-white/20 bg-white/5 px-3 text-[10px] outline-none"
        >
      </div>
      <div class="flex w-full gap-2 flex-col">
        <div class="flex w-full gap-2">
          <span class="text-[10px]">Monthly Number of Jobs</span>
          <div class="group relative">
            <TooltipIcon />
            <div class="absolute hidden min-w-[250px] group-hover:flex py-2 px-3 border border-white/10 rounded-md bg-[#394A43] z-10 text-[12px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </div>
        </div>
        <input
          type="text"
          value="1500"
          readonly
          class="w-[165px] h-[35px] rounded-md border border-white/20 bg-white/5 px-3 text-[10px] outline-none"
        >
      </div>
      <button class="bg-[#138959] min-w-[82px] min-h-[30px] text-[10px] rounded-md active:bg-[#394A43]">
        Change Plan
      </button>
    </div>
  </div>
</template>