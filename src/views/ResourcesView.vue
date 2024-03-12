<script setup lang='ts'>
import AppElementsWrapper from '@/components/base/AppElementsWrapper.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import ResourcePost from '@/components/resources/ResourcePost.vue';
</script>

<template>
  <div class="w-full px-4 py-0 md:p-10 md:pb-0 max-w-[1370px]">
    <h2 class="font-[Jakarta] text-white text-xl mb-5">
      Resources
    </h2>
    <AppElementsWrapper class="gap-4 w-auto flex flex-col bg-transparent sm:bg-[#222F2A] p-0 sm:p-5 font-[Jakarta] text-white">
      <div class="w-full min-h-[188px] flex flex-col justify-between rounded-md border bg-white/5  border-white/5  text-white">
        <div class="flex flex-col items-start">
          <div class="p-5 flex flex-col gap-2">
            <span class="text-lg font-[Jakarta]">Not sure how to use the HybridSolver?</span>
            <span class="text-sm">Check out Quantagonia’s API client documentation or dive deep into a hands-on tutorial. </span>
          </div>
        </div>
        <div class="group m-5">
          <a
            href="#!"
            class="text-sm pt-1 text-[#49D49C] flex gap-1 items-center parent-hover:text-red-400"
          >Documentation 
            <ArrowIcon class="w-[14px] group-hover:translate-x-1 transition-all duration-300 pt-0.5" />
          </a>
        </div>
      </div>
  
      <!-- hands on -->
      <div class="flex justify-between items-center mt-3 border-b pb-5 border-white/10">
        <div class="flex flex-col gap-2">
          <span class="text-lg font-[Jakarta]">Hands-On</span>
          <span class="text-sm">Learn more about ... </span>
        </div>
        <div class="group">
          <a
            href="#!"
            class="text-sm pt-1 text-[#49D49C] flex gap-1 items-center parent-hover:text-red-400"
          >View All 
            <ArrowIcon class="w-[14px] group-hover:translate-x-1 transition-all duration-300 pt-0.5" />
          </a>
        </div>
      </div>
      <!-- resource posts -->
      <div class="flex gap-5 flex-col flex-wrap max-h-[400px] overflow-hidden overflow-x-scroll w-full max-w-[1330px] pt-3">
        <ResourcePost
          v-for="_ in 10"
          :key="_"
        />
      </div>
    </AppElementsWrapper>
  </div>
</template>