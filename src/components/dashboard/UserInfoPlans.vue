<script setup lang='ts'>
import ArrowIcon from '../icons/ArrowIcon.vue';
import AppKnob from '../base/AppKnob.vue';
import ProgressBar from 'primevue/progressbar';
import TooltipIcon from '../icons/TooltipIcon.vue';
import UserInfoPlanModal from "./UserInfoPlanModal.vue";
import { ref } from 'vue';

const freePlanOptionsModalVisible = ref(false);
</script>

<template>
  <div class="xl:max-w-[327px] w-full max-h-[253px] h-full  text-white rounded-md border-0.5 bg-[#394A43] relative z-0">
    <div class="flex justify-between items-center p-5 border-b border-white border-opacity-10">
      <div class=" flex flex-col justify-center">
        <h2 class="text-base">
          Free Plan
        </h2>
        <div class="group">
          <a
            href="#!"
            class="text-sm pt-1 text-[#49D49C] flex gap-1 items-center parent-hover:text-red-400"
          >Upgrade Now 
            <ArrowIcon class="w-[14px] group-hover:translate-x-1 transition-all duration-300 pt-0.5" />
          </a>
        </div>
      </div>
      <div class="relative">
        <AppKnob />
        <TooltipIcon
          class="absolute top-[-3px] right-[-12px]"
          @click="freePlanOptionsModalVisible = true"
        />
      </div>
      <UserInfoPlanModal
        :open-modal="freePlanOptionsModalVisible"
        @close-modal="freePlanOptionsModalVisible = false"
      />
    </div>
    <div class="text-[10px] py-6 px-5">
      <div class="flex flex-col">
        <div class="flex justify-between items-center pb-2">
          <span>Number Of Jobs</span>
          <span>1200/1500</span>
        </div>
        <ProgressBar
          :value="60"
          :show-value="false"
          class="h-[13px] bg-[#57635E] border border-white  border-opacity-5"
        />
      </div>
      <div class="flex flex-col mt-5">
        <div class="flex justify-between items-center pb-2">
          <span>Compute Hours</span>
          <span>1200/1500</span>
        </div>
        <ProgressBar
          :value="80"
          :show-value="false"
          class="h-[13px] bg-[#57635E] border border-white  border-opacity-5"
        />
      </div>
    </div>
  </div>
</template>

<style>
.p-progressbar-value {
  border-radius: 100px;
  background: linear-gradient(to right, #138959, #49D49C);

}
</style>