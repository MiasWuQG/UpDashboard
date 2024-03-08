<script setup lang='ts'>
import AppElementsWrapper from '../base/AppElementsWrapper.vue';
import AllJobsIcon from '../icons/AllJobsIcon.vue';
import FailedJobsIcon from '../icons/FailedJobsIcon.vue';
import CompletedJobsIcon from '../icons/CompletedJobsIcon.vue';
import ActiveJobsIcon from '../icons/ActiveJobsIcon.vue';
import ArrowIcon from '../icons/ArrowIcon.vue';

defineProps({
  hideHeaders: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div
    :class="{'mt-0': hideHeaders, 'mt-10': !hideHeaders}"
  >
    <h2
      v-if="!hideHeaders"
      class="font-[Jakarta] text-white text-xl mb-5"
    >
      Jobs
    </h2>
    <AppElementsWrapper
      class="gap-4 w-full max-w-[1370px] sm:bg-[#222F2A] p-0 flex flex-col lg:flex-row bg-transparent"
      :class="{'sm:p-5': !hideHeaders}"
    >
      <div class="w-full flex gap-4 flex-col sm:flex-row">
        <div class="w-full sm:max-w-[50%] py-4 px-8 h-[135px] rounded-md bg-[#394A43] flex flex-col justify-center gap-5 font-[Jakarta] text-white">
          <div>
            <AllJobsIcon />
          </div>
          <div class="flex w-full justify-between items-center">
            <div class="flex flex-col">
              <span class="text-lg">837</span>
              <span class="text-sm pt-[1px]">All Jobs</span>
            </div>
            <div class="cursor-pointer bg-white/10 rounded-full w-[34px] h-[34px] flex items-center justify-center hover:translate-x-2 transition-all duration-300">
              <ArrowIcon />
            </div>
          </div>
        </div>
        <div class="w-full sm:max-w-[50%] py-4 px-8 h-[135px] rounded-md bg-[#394A43] flex flex-col justify-center gap-5 font-[Jakarta] text-white">
          <div>
            <CompletedJobsIcon />
          </div>
          <div class="flex w-full justify-between items-center">
            <div class="flex flex-col">
              <span class="text-lg">834</span>
              <span class="text-sm pt-[1px]">Completed Jobs</span>
            </div>
            <div class="cursor-pointer bg-white/10 rounded-full w-[34px] h-[34px] flex items-center justify-center hover:translate-x-2 transition-all duration-300">
              <ArrowIcon />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex gap-4 flex-col sm:flex-row">
        <div class="w-full sm:max-w-[50%] py-4 px-8 h-[135px] rounded-md bg-[#394A43] flex flex-col justify-center gap-5 font-[Jakarta] text-white">
          <div>
            <ActiveJobsIcon />
          </div>
          <div class="flex w-full justify-between items-center">
            <div class="flex flex-col">
              <span class="text-lg">1</span>
              <span class="text-sm pt-[1px]">Active Jobs</span>
            </div>
            <div class="cursor-pointer bg-white/10 rounded-full w-[34px] h-[34px] flex items-center justify-center hover:translate-x-2 transition-all duration-300">
              <ArrowIcon />
            </div>
          </div>
        </div>
        <div class="w-full sm:max-w-[50%] py-4 px-8 h-[135px] rounded-md bg-[#394A43] flex flex-col justify-center gap-5 font-[Jakarta] text-white">
          <div>
            <FailedJobsIcon />
          </div>
          <div class="flex w-full justify-between items-center">
            <div class="flex flex-col">
              <span class="text-lg">2</span>
              <span class="text-sm pt-[1px]">Failed Jobs</span>
            </div>
            <div class="cursor-pointer bg-white/10 rounded-full w-[34px] h-[34px] flex items-center justify-center hover:translate-x-2 transition-all duration-300">
              <ArrowIcon />
            </div>
          </div>
        </div>
      </div>
    </AppElementsWrapper>
  </div>
</template>