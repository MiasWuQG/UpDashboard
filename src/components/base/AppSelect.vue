<script setup lang='ts'>
import { ref } from 'vue';
import { OnClickOutside } from '@vueuse/components';
defineProps({
    options: {
        type: Array,
        required: true,
    },
    modelValue: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue']);

const isSelectOpen = ref(false);

const toggleCustomSelect = () => {
  isSelectOpen.value = !isSelectOpen.value;
};

</script>

<template>
  <OnClickOutside @trigger="isSelectOpen = false">
    <div
      class="def-select relative font-[Jakarta] flex items-center cursor-pointer outline-none h-[35px] rounded-md bg-[#424d4a] px-3 text-[11px]"
      :class="{'rounded-b-none' : isSelectOpen }"
      @click="toggleCustomSelect"
    >
      <span v-if="modelValue.length === 0">Select</span>
      <div
        v-if="isSelectOpen"
        class="absolute z-30 left-0 bottom-[-125px] w-full bg-[#424d4a] p-2 flex flex-col gap-2 rounded-b-md"
      >
        <div
          v-for="option in (options as string[])"
          :key="option"
          class="w-full rounded-md bg-white/10 p-2 hover:bg-white/5"
          @click="emit('update:modelValue', option)"
        >
          {{ option }}
        </div>
      </div>
      <span v-if="modelValue.length > 0">{{ modelValue }} ss</span>
    </div>
  </OnClickOutside>
</template>