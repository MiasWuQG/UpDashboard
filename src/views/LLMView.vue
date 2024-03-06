<script setup lang='ts'>
import AppElementsWrapper from '@/components/base/AppElementsWrapper.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
</script>

<template>
  <div class="w-full px-4 py-0 md:p-10 max-w-[1370px]">
    <h2 class="font-[Jakarta] text-white text-xl mb-5">
      LLM x HybridSolver
    </h2>
    <AppElementsWrapper class="gap-4 w-auto flex flex-col bg-transparent sm:bg-[#222F2A] p-0 sm:p-5 font-[Jakarta] text-white">
      <div class="w-full min-h-[188px] flex flex-col justify-between rounded-md border bg-white/5  border-white/5  text-white">
        <div class="flex flex-col items-start">
          <div class="p-5 flex flex-col gap-2">
            <span class="text-lg font-[Jakarta]">Coming soon</span>
            <span class="text-sm">A short paragraph needs to be inserted over here.</span>
          </div>
        </div>
        <div class="group m-5">
          <a
            href="#!"
            class="text-sm font-semibold pt-1 text-[#49D49C] flex gap-1 items-center parent-hover:text-red-400"
          >Learn more 
            <ArrowIcon class="w-[14px] group-hover:translate-x-1 transition-all duration-300 pt-0.5" />
          </a>
        </div>
      </div>
    </AppElementsWrapper>
  </div>
</template>