<script setup lang='ts'>
import { ref } from 'vue';
import AllJobsIcon from '../icons/AllJobsIcon.vue';
import FailedJobsIcon from '../icons/FailedJobsIcon.vue';
import CompletedJobsIcon from '../icons/CompletedJobsIcon.vue';
import ActiveJobsIcon from '../icons/ActiveJobsIcon.vue';
import ArrowIcon from '../icons/ArrowIcon.vue';

const activeFilter = ref("all");
const setActiveFilter = (filter: string) => {
    activeFilter.value = filter;
};
</script>

<template>
  <div class="gap-4 w-full max-w-[1370px] sm:bg-[#222F2A] p-0 flex flex-col lg:flex-row bg-transparent">
    <div class="w-full flex gap-4 flex-col sm:flex-row">
      <div
        class="cursor-pointer border:border hover:hover:border-[#49D49C] w-full sm:max-w-[50%] py-4 px-8 h-[135px] rounded-md bg-[#394A43] flex flex-col justify-center gap-5 font-[Jakarta] text-white"
        :class="{'border border-[#49D49C] bg-white/25': activeFilter === 'all', 'border border-white/0': activeFilter !== 'all' }"
        @click="setActiveFilter('all')"
      >
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
      <div
        class="cursor-pointer hover:border hover:border-[#49D49C] w-full sm:max-w-[50%] py-4 px-8 h-[135px] rounded-md bg-[#394A43] flex flex-col justify-center gap-5 font-[Jakarta] text-white"
        :class="{'border border-[#49D49C] bg-white/25': activeFilter === 'completed', 'border border-white/0': activeFilter !== 'completed' }"
        @click="setActiveFilter('completed')"
      >
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
      <div
        class="cursor-pointer hover:border hover:border-[#49D49C] w-full sm:max-w-[50%] py-4 px-8 h-[135px] rounded-md bg-[#394A43] flex flex-col justify-center gap-5 font-[Jakarta] text-white"
        :class="{'border border-[#49D49C] bg-white/25': activeFilter === 'active', 'border border-white/0': activeFilter !== 'active' }"
        @click="setActiveFilter('active')"
      >
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
      <div
        class="cursor-pointer hover:border hover:border-[#49D49C] w-full sm:max-w-[50%] py-4 px-8 h-[135px] rounded-md bg-[#394A43] flex flex-col justify-center gap-5 font-[Jakarta] text-white"
        :class="{'border border-[#49D49C] bg-white/25': activeFilter === 'failed', 'border border-white/0': activeFilter !== 'failed' }"
        @click="setActiveFilter('failed')"
      >
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
  </div>
</template>