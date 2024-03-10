<script setup lang='ts'>
import AppElementsWrapper from '@/components/base/AppElementsWrapper.vue';
import JobsTable from '@/components/jobs/JobsTable.vue';
import JobsTableFilters from '@/components/jobs/JobsTableFilters.vue';

</script>
<template>
  <div class="w-full px-4 py-0 md:p-10 md:pb-0 max-w-[1370px]">
    <h2 class="font-[Jakarta] text-white text-xl mb-5">
      Jobs
    </h2>
    <AppElementsWrapper
      class="w-full gap-4 flex flex-col bg-transparent sm:bg-[#222F2A] p-0 sm:p-5 font-[Jakarta] text-white"
    >
      <JobsTableFilters />
      <JobsTable />
    </AppElementsWrapper>
  </div>
</template>

<style>
</style>