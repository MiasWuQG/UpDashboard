<script setup lang='ts'>
import { ref, watch } from "vue";
import { onClickOutside } from '@vueuse/core';
import SettingsIcon from "../icons/SettingsIcon.vue";
import TooltipIcon from "../icons/TooltipIcon.vue";
import CloseIcon from "../icons/CloseIcon.vue";
import Checkbox from "primevue/checkbox";
import PlayIcon from "../icons/PlayIcon.vue";
import CheckMarkIcon from "../icons/CheckMarkIcon.vue";
import AppSelect from "../base/AppSelect.vue";


defineProps({
  openModal : {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(['closeModal']);

const jobsTableSettingsModalRef = ref();
const timeLimitOptions = ref([
  '1200',
  '3600',
  '4800',
]);
const absoluteGapOptions = ref([
  "1 e-9",
  "2 e-9",
  "3 e-9",
]);
const relativeGapOptions = ref([
  "0.00001",
  "0.00002",
  "0.00003",
]);

const selectedTimeLimit = ref("");
const absoluteGap = ref("");
const relativeGap = ref("");
const optimalityProof = ref(['on']);
const publicQuantumHeuristics = ref([]);

onClickOutside(jobsTableSettingsModalRef, () => {
  setTimeout(() => {
    emit('closeModal');
  }, 20);
});

watch(optimalityProof, () => {
  if (optimalityProof.value.length > 1) {
    optimalityProof.value.shift();
  }
});
</script>

<template>
  <div
    v-if="openModal"
    ref="jobsTableSettingsModalRef"
    class="max-w-[377px] w-full text-white rounded-md absolute px-6 pt-7 pb-4 top-10 sm:translate-y-0 right-0 left-0 mx-auto sm:top-[-100px] sm:left-auto sm:right-[115px] backdrop-blur-3xl	 bg-[#2d3a35]/80 z-10  border  border-white/20"
  >
    <div
      class="absolute right-0 top-0 p-4 flex justify-end items-end" 
      @click="$emit('closeModal')"
    >
      <CloseIcon
        class="cursor-pointer text-center"
      />
    </div>
    <div class="flex justify-between items-start">
      <div class="flex items-center gap-2 mb-2">
        <SettingsIcon />
        <span class="text-sm">Settings</span>
      </div>
    </div>
    <div class="flex flex-col items-start justify-center gap-4 py-4">
      <div class="flex w-full gap-2 flex-col">
        <div class="flex w-full gap-2">
          <span class="text-[10px]">Time Limit</span>
          <div class="group relative">
            <TooltipIcon />
            <div class="absolute hidden min-w-[250px] group-hover:flex py-2 px-3 border border-white/10 rounded-md bg-[#394A43] z-10 text-[12px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </div>
        </div>
        <AppSelect
          v-model="selectedTimeLimit"
          :options="timeLimitOptions"
        />
      </div>
      <div class="flex w-full gap-2 flex-col">
        <div class="flex w-full gap-2">
          <span class="text-[10px]">Optimality Proof</span>
          <div class="group relative">
            <TooltipIcon />
            <div class="absolute hidden min-w-[250px] group-hover:flex py-2 px-3 border border-white/10 rounded-md bg-[#394A43] z-10 text-[12px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </div>
        </div>
        <div class="flex gap-3 my-1">
          <div class="flex items-center gap-1">
            <Checkbox
              v-model="optimalityProof"
              input-id="c1"
              :disabled="optimalityProof.includes('on')"
              :pt="{
                root: { class: 'rounded-[2px] border-[#49D49C] w-[14px] h-[14px]' },
                box: { class: 'bg-transparent w-[14px] h-[14px]' },
              }"
              name="On"
              value="on"
            >
              <template #icon="{ checked }">
                <div :class="{'w-full h-full rounded-[2px] bg-[#49D49C] border border-[#49D49C] bg-opacity-25': checked, 'w-full h-full rounded-[2px] border border-white/10 bg-white/5 ': !checked }">
                  <CheckMarkIcon v-if="checked" />
                </div>
              </template>
            </Checkbox>
            <label
              for="c1"
              class="text-[9px] cursor-pointer"
            > On </label>
          </div>
          <div class="flex items-center gap-1">
            <Checkbox
              v-model="optimalityProof"
              :disabled="optimalityProof.includes('off')"
              input-id="c2"
              :pt="{
                root: { class: 'rounded-[2px] border-[#49D49C] w-[14px] h-[14px]' },
                box: { class: ' bg-transparent w-[14px] h-[14px]' },
              }"
              name="Off (Qubo only)"
              value="off"
            >
              <template #icon="{ checked }">
                <div :class="{'w-full h-full rounded-[2px] bg-[#49D49C] border border-[#49D49C] bg-opacity-25': checked, 'w-full h-full rounded-[2px] border border-white/10 bg-white/5 ': !checked }">
                  <CheckMarkIcon v-if="checked" />
                </div>
              </template>
            </Checkbox>
            <label
              for="c2"
              class="text-[9px]  cursor-pointer"
            > Off (Qubo only) </label>
          </div>
        </div>
      </div>
      <div class="flex w-full gap-2 flex-col">
        <div class="flex w-full gap-2">
          <span class="text-[10px]">Absolute Gap</span>
          <div class="group relative">
            <TooltipIcon />
            <div class="absolute hidden min-w-[250px] group-hover:flex py-2 px-3 border border-white/10 rounded-md bg-[#394A43] z-10 text-[12px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </div>
        </div>
        <AppSelect
          v-model="absoluteGap"
          :options="absoluteGapOptions"
        />
      </div>
      <div class="flex w-full gap-2 flex-col">
        <div class="flex w-full gap-2">
          <span class="text-[10px]">Relative Gap</span>
          <div class="group relative">
            <TooltipIcon />
            <div class="absolute hidden min-w-[250px] group-hover:flex py-2 px-3 border border-white/10 rounded-md bg-[#394A43] z-10 text-[12px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </div>
        </div>
        <AppSelect
          v-model="relativeGap"
          :options="relativeGapOptions"
        />
      </div>
      <div class="flex w-full gap-2 flex-col">
        <div class="flex w-full gap-2">
          <span class="text-[10px]">Public Quantum Heuristics</span>
          <div class="group relative">
            <TooltipIcon />
            <div class="absolute hidden min-w-[250px] group-hover:flex py-2 px-3 border border-white/10 rounded-md bg-[#394A43] z-10 text-[12px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start gap-3 my-1">
          <div class="flex items-center gap-1">
            <Checkbox
              v-model="publicQuantumHeuristics"
              input-id="c3"
              :pt="{
                root: { class: 'rounded-[2px] border-[#49D49C] w-[14px] h-[14px]' },
                box: { class: 'bg-transparent w-[14px] h-[14px]' },
              }"
              name="D-Wave sim"
              value="D-Wave sim"
            >
              <template #icon="{ checked }">
                <div :class="{'w-full h-full rounded-[2px] bg-[#49D49C] border border-[#49D49C] bg-opacity-25': checked, 'w-full h-full rounded-[2px] border border-white/10 bg-white/5 ': !checked }">
                  <CheckMarkIcon v-if="checked" />
                </div>
              </template>
            </Checkbox>
            <label
              for="c3"
              class="text-[9px] cursor-pointer"
            > D-Wave sim </label>
          </div>
          <div class="flex items-center gap-1">
            <Checkbox
              v-model="publicQuantumHeuristics"
              input-id="c4"
              :pt="{
                root: { class: 'rounded-[2px] border-[#49D49C] w-[14px] h-[14px]' },
                box: { class: ' bg-transparent w-[14px] h-[14px]' },
              }"
              name="PASQAL QAOA sim"
              value="PASQAL QAOA sim"
            >
              <template #icon="{ checked }">
                <div :class="{'w-full h-full rounded-[2px] bg-[#49D49C] border border-[#49D49C] bg-opacity-25': checked, 'w-full h-full rounded-[2px] border border-white/10 bg-white/5 ': !checked }">
                  <CheckMarkIcon v-if="checked" />
                </div>
              </template>
            </Checkbox>
            <label
              for="c4"
              class="text-[9px]  cursor-pointer"
            > PASQAL QAOA sim </label>
          </div>
          <div class="flex items-center gap-1">
            <Checkbox
              v-model="publicQuantumHeuristics"
              input-id="c5"
              :pt="{
                root: { class: 'rounded-[2px] border-[#49D49C] w-[14px] h-[14px]' },
                box: { class: ' bg-transparent w-[14px] h-[14px]' },
              }"
              name="PASQAL QAA sim"
              value="PASQAL QAA sim"
            >
              <template #icon="{ checked }">
                <div :class="{'w-full h-full rounded-[2px] bg-[#49D49C] border border-[#49D49C] bg-opacity-25': checked, 'w-full h-full rounded-[2px] border border-white/10 bg-white/5 ': !checked }">
                  <CheckMarkIcon v-if="checked" />
                </div>
              </template>
            </Checkbox>
            <label
              for="c5"
              class="text-[9px]  cursor-pointer"
            > PASQAL QAA sim </label>
          </div>
          <div class="flex items-center gap-1">
            <Checkbox
              v-model="publicQuantumHeuristics"
              input-id="c6"
              :pt="{
                root: { class: 'rounded-[2px] border-[#49D49C] w-[14px] h-[14px]' },
                box: { class: ' bg-transparent w-[14px] h-[14px]' },
              }"
              name="IBM QAOA sim"
              value="IBM QAOA sim"
            >
              <template #icon="{ checked }">
                <div :class="{'w-full h-full rounded-[2px] bg-[#49D49C] border border-[#49D49C] bg-opacity-25': checked, 'w-full h-full rounded-[2px] border border-white/10 bg-white/5 ': !checked }">
                  <CheckMarkIcon v-if="checked" />
                </div>
              </template>
            </Checkbox>
            <label
              for="c6"
              class="text-[9px]  cursor-pointer"
            > IBM QAOA sim </label>
          </div>
        </div>
      </div>
      <div class="flex gap-2">
        <button
          class="bg-[#138959] min-w-[82px] min-h-[30px] text-[10px] rounded-md active:bg-[#394A43] flex gap-1 items-center justify-center"
          @click="emit('closeModal')"
        >
          <PlayIcon />
          Submit
        </button>
        <button
          class="bg-white/10  min-w-[82px] min-h-[30px] text-[10px] rounded-md active:bg-[#394A43]"
          @click="emit('closeModal')"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.def-select {
  background-image: url('../../assets/images/select-item.svg');
  background-repeat: no-repeat;
  background-position: right 1rem center;
}
.p-checkbox-icon	 {
  display: none;
}
</style>