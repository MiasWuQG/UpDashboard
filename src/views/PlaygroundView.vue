<script setup lang='ts'>
import { ref } from 'vue';
import AppElementsWrapper from '@/components/base/AppElementsWrapper.vue';
import UploadIcon from '@/components/icons/UploadIcon.vue';
import PlayIcon from '@/components/icons/PlayIcon.vue';
import SettingsIcon from '@/components/icons/SettingsIcon.vue';
import PlaygroundSettingsModal from '@/components/playground/PlaygroundSettingsModal.vue';
import ActiveJobsIcon from '@/components/icons/ActiveJobsIcon.vue';


const openPlaygroundSettings = ref(false);
const allowSubmitJobProcess = ref(true);
const showJobSuccessNotification = ref(true);
const showJobFailNotification = ref(true);
const userUploadedFileName = ref("");
const userUploadedFile = ref(false);
const manualInput = ref("");
const startUploadingProcess = ref(false);

const previewUploadedFile = (event: any) => {
  userUploadedFile.value = true;
  userUploadedFileName.value = event.target.files[0].name;
};

const removeFilePreview = () => {
  userUploadedFile.value = false;
  userUploadedFileName.value = "";
  manualInput.value = "";
};
</script>

<template>
  <div class="w-full px-4 py-0 md:p-10 md:pb-0 max-w-[1370px] font-[Jakarta]">
    <h2 class="font-[Jakarta] text-white text-xl mb-5">
      Playground
    </h2>
    <AppElementsWrapper class="gap-4 w-auto flex flex-col bg-transparent sm:bg-[#222F2A] p-0 sm:p-5 font-[Jakarta] text-white">
      <div class="w-full flex relative items-center gap-4 border-b pb-4 border-white/20 flex-wrap">
        <div class="px-1">
          <label
            for="fileUpload"
            class="flex gap-1 items-center cursor-pointer"
          >
            <img
              src="../assets/images/uploadicon.svg"
              alt=""
            >
            <span class="text-white/50 text-sm">Upload File</span>
          </label>
        </div>
        <div
          class="flex gap-1 cursor-pointer"
          @click.prevent="openPlaygroundSettings = true"
        >
          <SettingsIcon class="opacity-50" />
          <span class="text-white/50 text-sm">Settings</span>
        </div>
        <PlaygroundSettingsModal
          :open-modal="openPlaygroundSettings"
          @close-modal="() => openPlaygroundSettings = false"
        />
        <div
          class="flex gap-1 cursor-pointer items-center"
        >
          <UploadIcon class="opacity-40 transform rotate-360" />
          <span class="text-white/50 text-sm">File Templates</span>
        </div>
      </div>
      <div class="bg-[#2d3a35] w-full flex flex-col h-[268px] rounded-lg  dash-border p-1 relative">
        <textarea
          v-model="manualInput"
          class="w-4/5 sm:w-[100px] h-auto md:h-4/5 absolute left-1 md:left-1 outline-none p-3 text-sm resize-none cursor-default bg-[#2d3a35]"
        />
        <input
          id="fileUpload"
          title=""
          type="file"
          class="h-[calc(100%-57px)] bottom-0 sm:top-0 sm:h-full sm:w-[calc(100%-100px)] absolute right-0 opacity-0"
          @change="($event) => previewUploadedFile($event)"
        >
        <div class="flex bg-[#2d3a35] text-white/50 rounded-lg flex-col leading-[20px] font-[Jakarta] items-center justify-center w-full h-[260px]">
          <span
            class="absolute bottom-6 left-8 underline cursor-pointer"
            @click="removeFilePreview"
          >clear</span>
          <div
            v-if="!userUploadedFile"
            class="flex flex-col justify-center items-center max-w-[500px] pb-0"
          >
            <div class="w-[100px] flex justify-center sm:justify-center relative bottom-5">
              <svg
                class="opacity-40 block"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.2665 15.7422L15.711 10.1867M15.711 10.1867L10.1555 15.7422M15.711 10.1867V21.2977M29.5997 15.7422C29.5997 23.4128 23.3815 29.6309 15.711 29.6309C8.04045 29.6309 1.82227 23.4128 1.82227 15.7422C1.82227 8.0717 8.04045 1.85352 15.711 1.85352C23.3815 1.85352 29.5997 8.0717 29.5997 15.7422Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            
            <label
              for="fileUpload"
              class="pr-0 sm:pr-[0px] cursor-pointer relative z-30 underline"
            >
              Upload your file (MPS, QUBO, LP) 
            </label>
            <p class="pr-0 sm:pr-[0px] no-underline">
              or drag and drop!
            </p>
          </div>
          <div v-else>
            <p class="pr-0 sm:pr-[0px]">
              {{ userUploadedFileName }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex gap-2">
        <button
          v-if="!startUploadingProcess"
          class="bg-[#138959] min-w-[82px] w-[100px] min-h-[40px] text-sm rounded-md active:bg-[#394A43] flex gap-1 items-center justify-center"
          @click="startUploadingProcess = true"
        >
          <PlayIcon />
          Submit
        </button>
        <button
          v-else
          class="bg-[#FEE2E2] min-w-[82px] w-[100px] min-h-[40px] text-sm rounded-md active:bg-[#394A43] flex gap-1 items-center justify-center"
          @click="startUploadingProcess = false"
        >
          <div class="w-[9px] h-[9px] bg-[#991B1B]" />
          <span class="text-[#991B1B]">Stop</span>
        </button>
        <button
          class="bg-white/10 flex items-center justify-center gap-2  min-w-[82px] w-[100px] min-h-[40px] text-sm rounded-md active:bg-[#394A43]"
        >
          <UploadIcon class="opacity-40 transform rotate-360" />
          <span class="opacity-40">
            Log
          </span>
        </button>
      </div>

      <!-- job progress notifications -->
      <div
        v-if="allowSubmitJobProcess"
        class="flex gap-3 py-4 px-6 bg-white/10 rounded-md justify-between items-center"
      >
        <div class="flex gap-2 items-center">
          <ActiveJobsIcon />
          <span class="text-sm">Job is being submitted!</span>
        </div>
        <div 
          class="text-white cursor-pointer"
          @click="allowSubmitJobProcess = false"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.945237 1.19133C1.33576 0.800806 1.96893 0.800806 2.35945 1.19133L6.65234 5.48422L10.9452 1.19133C11.3358 0.800806 11.9689 0.800806 12.3595 1.19133C12.75 1.58185 12.75 2.21502 12.3595 2.60554L8.06656 6.89844L12.3595 11.1913C12.75 11.5819 12.75 12.215 12.3595 12.6055C11.9689 12.9961 11.3358 12.9961 10.9452 12.6055L6.65234 8.31265L2.35945 12.6055C1.96893 12.9961 1.33576 12.9961 0.945237 12.6055C0.554713 12.215 0.554713 11.5819 0.945237 11.1913L5.23813 6.89844L0.945237 2.60554C0.554713 2.21502 0.554713 1.58185 0.945237 1.19133Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div class="bg-white/10 p-6 rounded-md flex flex-col gap-3">
        <div>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.85547 11.8984L9.85547 14.8984L15.8555 8.89844M21.3555 11.8984C21.3555 17.4213 16.8783 21.8984 11.3555 21.8984C5.83262 21.8984 1.35547 17.4213 1.35547 11.8984C1.35547 6.37559 5.83262 1.89844 11.3555 1.89844C16.8783 1.89844 21.3555 6.37559 21.3555 11.8984Z"
              stroke="#49D49C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <span class="text-sm">Queued job with ID: 283e89cb-a73f-42fa-8541-c70351b0653e</span>
      </div>
      <div class="bg-white/10 p-6 rounded-md flex flex-col gap-3">
        <svg
          width="23"
          height="24"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.7487 13.5002L11.2487 17.0002L18.2487 10.0002M24.6654 13.5002C24.6654 19.9435 19.442 25.1668 12.9987 25.1668C6.55538 25.1668 1.33203 19.9435 1.33203 13.5002C1.33203 7.05684 6.55538 1.8335 12.9987 1.8335C19.442 1.8335 24.6654 7.05684 24.6654 13.5002Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
          
        <span class="text-sm">Finished processing job 283e89cb-a73f-42fa-8541-c70351b0653e</span>
      </div>
      <div class="bg-white/10 p-6 rounded-md flex flex-col gap-3">
        <ActiveJobsIcon class="w-[24px]" />
        <span class="text-sm">Job 283e89cb-a73f-42fa-8541-c70351b0653e is running...</span>
      </div>

      <!-- job success notification -->
      <div
        v-if="showJobSuccessNotification"
        class="flex gap-3 py-4 px-6 bg-[#49D49C]/10 text-[#49D49C] rounded-md justify-between items-center"
      >
        <div class="flex gap-2 items-center">
          <div>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.85547 11.8984L9.85547 14.8984L15.8555 8.89844M21.3555 11.8984C21.3555 17.4213 16.8783 21.8984 11.3555 21.8984C5.83262 21.8984 1.35547 17.4213 1.35547 11.8984C1.35547 6.37559 5.83262 1.89844 11.3555 1.89844C16.8783 1.89844 21.3555 6.37559 21.3555 11.8984Z"
                stroke="#49D49C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span class="text-sm">Job successfully executed!</span>
        </div>
        <div 
          class="text-white cursor-pointer"
          @click="showJobSuccessNotification = false"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.945237 1.19133C1.33576 0.800806 1.96893 0.800806 2.35945 1.19133L6.65234 5.48422L10.9452 1.19133C11.3358 0.800806 11.9689 0.800806 12.3595 1.19133C12.75 1.58185 12.75 2.21502 12.3595 2.60554L8.06656 6.89844L12.3595 11.1913C12.75 11.5819 12.75 12.215 12.3595 12.6055C11.9689 12.9961 11.3358 12.9961 10.9452 12.6055L6.65234 8.31265L2.35945 12.6055C1.96893 12.9961 1.33576 12.9961 0.945237 12.6055C0.554713 12.215 0.554713 11.5819 0.945237 11.1913L5.23813 6.89844L0.945237 2.60554C0.554713 2.21502 0.554713 1.58185 0.945237 1.19133Z"
              fill="#49D49C"
            />
          </svg>
        </div>
      </div>
      <!-- job fail notification -->
      <div
        v-if="showJobFailNotification"
        class="flex gap-3 py-4 px-6 bg-[#FEE2E2] text-[#991B1B] rounded-md justify-between items-center"
      >
        <div class="flex gap-2 items-center">
          <div>
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.93 4.43L18.07 18.57M21 11.5C21 17.0228 16.5228 21.5 11 21.5C5.47715 21.5 1 17.0228 1 11.5C1 5.97715 5.47715 1.5 11 1.5C16.5228 1.5 21 5.97715 21 11.5Z"
                stroke="#991B1B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span class="text-sm">Your job failed, please try again or check our <span class="underline cursor-pointer">Help Section</span>  for further information.</span>
        </div>
        <div 
          class="text-white cursor-pointer"
          @click="showJobFailNotification = false"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L7.41421 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
              fill="#991B1B"
            />
          </svg>
        </div>
      </div>
      <!-- Finished job stats -->
      <div class="flex gap-5 w-full flex-col lg:flex-row">
        <div class="flex gap-5 w-full flex-col sm:flex-row">
          <div class="w-full xl:w-[50%] px-7 py-9 bg-white/10 rounded-md border border-[#49D49C] border-opacity-50 flex justify-between items-center">
            <div class="flex flex-col">
              <span class="text-[#49D49C]">Optimal</span>
              <span>Solution</span>
            </div>
            <div class="w-[36px] h-[36px] rounded-full bg-white/5 flex items-center justify-center cursor-pointer">
              <UploadIcon class="transform rotate-360" />
            </div>
          </div>
          <div class="w-full xl:w-[50%] border border-white/5 px-7 py-9 bg-white/10 rounded-md flex justify-between items-center">
            <div class="flex flex-col text-base">
              <span>0.12 sec</span>
              <span class="text-sm">Runtime</span>
            </div>
          </div>
        </div>
        <div class="flex gap-5 w-full flex-col sm:flex-row">
          <div class="w-full xl:w-[50%] border border-white/5 px-7 py-9 bg-white/10 rounded-md flex justify-between items-center">
            <div class="flex flex-col text-base">
              <span>1.000000e+00</span>
              <span class="text-sm">Objective</span>
            </div>
          </div>
          <div class="w-full xl:w-[50%] border border-white/5 px-7 py-9 bg-white/10 rounded-md flex justify-between items-center">
            <div class="flex flex-col text-base">
              <span>0.00%</span>
              <span class="text-sm">Relative Gap</span>
            </div>
          </div>
        </div>
      </div>
    </AppElementsWrapper>
  </div>
</template>

<style>
.dash-border {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='rgb(255,255,255, 20%)' stroke-width='3' stroke-dasharray='30%2c 30 ' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 10px;
}

.p-fileupload-buttonbar {
    display: none;
}

.p-fileupload-content {
    padding: 0;
}


</style>