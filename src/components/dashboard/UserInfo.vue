<script setup lang='ts'>
import { ref } from 'vue';
import AppElementsWrapper from '../base/AppElementsWrapper.vue';
import CopyIcon from "../icons/CopyIcon.vue";
import UserInfoPlans from "./UserInfoPlans.vue";
import ArrowIcon from '../icons/ArrowIcon.vue';



const userData = ref({
  firstName: "Matthias",
  lastName: "Wulff",
  email: "matthias.wulff@quantagonia.com",
  apiKey: "***************",
});

const copiedApiKey = ref(false);

const copyApiKey = () => {
  copiedApiKey.value = true;
  copyToClipBoard(userData.value.apiKey);
  setTimeout(() => {
    copiedApiKey.value = false;
  }, 500);
};

const copyToClipBoard = (text: string) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard:', text);
    })
    .catch(err => {
      console.error('Unable to copy text to clipboard:', err);
    });
};
</script>

<template>
  <h2 class="font-[Jakarta] text-white text-xl mb-5">
    Dashboard
  </h2>
  <AppElementsWrapper class="gap-4 max-w-[1370px] w-auto flex flex-col xl:flex-row bg-transparent sm:bg-[#222F2A] p-0 sm:p-5">
    <div class="w-full flex gap-4 flex-col sm:flex-row">
      <div class="xl:max-w-[327px] w-full max-h-[253px] h-[253] xl:h-auto  text-white rounded-md border-0.5 bg-[#394A43]">
        <div class="border-b border-white border-opacity-10 p-5 flex flex-col justify-center">
          <h2 class="text-base">
            {{ userData.firstName + " " + userData.lastName }}
          </h2>
          <span class="text-sm pt-1 opacity-60">{{ userData.email }}</span>
        </div>
        <div class="text-[10px] py-6 px-5">
          <span>API Key</span>
          <div class="flex gap-2 items-end">
            <div class="relative max-w-[191px] w-full">
              <input
                type="text"
                :value="userData.apiKey"
                readonly
                disabled
                class="max-w-[191px] w-full h-[30px] rounded-lg border border-white border-opacity-10 p-3 mt-2 bg-transparent outline-none"
              >
              <CopyIcon
                v-if="!copiedApiKey"
                class="absolute right-3 top-4 cursor-pointer"
                @click="copyApiKey"
              />
              <span
                v-else
                class="absolute right-3 top-4"
              >Copied!</span>
            </div>
            <button class="bg-[#138959] min-w-[82px] h-[30px] rounded-md active:bg-[#394A43]">
              Regenerate
            </button>
          </div>
        </div>
      </div>
      <UserInfoPlans />
    </div>
    <div class="w-full h-[253px] flex flex-col justify-between rounded-md border border-white/20  text-white">
      <div class="flex flex-col items-start">
        <img
          src="../../assets/images/logo.png"
          class="p-1 pb-0 w-[80px]"
        >
        <div class="p-4 flex flex-col pt-2 gap-2">
          <span class="text-lg font-[Jakarta]">Don’t know where to start?</span>
          <span class="text-sm">Check out our documentation and tutorials.</span>
        </div>
      </div>
      <div class="group m-4">
        <a
          href="#!"
          class="text-sm pt-1 text-[#49D49C] flex gap-1 items-center parent-hover:text-red-400"
        >Resources 
          <ArrowIcon class="w-[14px] group-hover:translate-x-1 transition-all duration-300 pt-0.5" />
        </a>
      </div>
    </div>
  </AppElementsWrapper>
</template>