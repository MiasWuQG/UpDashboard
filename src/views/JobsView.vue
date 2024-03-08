<script setup lang='ts'>
import { ref } from 'vue';
import AppElementsWrapper from '@/components/base/AppElementsWrapper.vue';
import JobsTable from '@/components/jobs/JobsTable.vue';
import JobsTableFilters from '@/components/jobs/JobsTableFilters.vue';
const jobs = ref([
  { id: "283e89cb-a73f-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "running", log: "Log", action: "stop" },
  { id: "283e89cb-a73f-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "completed", log: "Log", action: "adjust" },
  { id: "283e89cb-a73f-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "running", log: "Log", action: "stop" },
  { id: "283e89cb-a73f-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "failed", log: "Log", action: "adjust" },
  { id: "283e89cb-a73f-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "running", log: "Log", action: "adjust" },
  { id: "283e89cb-a73f-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "running", log: "Log", action: "stop" },
  { id: "283e89cb-a73f-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "completed", log: "Log", action: "adjust" },
  { id: "283e89cb-a73f-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "completed", log: "Log", action: "adjust" },
  { id: "283e89cb-a73f-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "completed", log: "Log", action: "adjust" },
  { id: "283e89cb-a73f-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "completed", log: "Log", action: "adjust" },
  { id: "283e89cb-a73f-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "completed", log: "Log", action: "adjust" },
  { id: "283e89cb-a73f-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "completed", log: "Log", action: "adjust" },
  { id: "283e89cb-a73f-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "completed", log: "Log", action: "adjust" },
]);

</script>
<template>
  <div class="w-full px-4 py-0 md:p-10 max-w-[1370px]">
    <h2 class="font-[Jakarta] text-white text-xl mb-5">
      Jobs
    </h2>
    <AppElementsWrapper
      class="w-full gap-4 flex flex-col bg-transparent sm:bg-[#222F2A] p-0 sm:p-5 font-[Jakarta] text-white"
    >
      <JobsTableFilters />
      <JobsTable :data="jobs" />
    </AppElementsWrapper>
  </div>
</template>

<style>
</style>