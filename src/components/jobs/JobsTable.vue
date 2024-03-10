<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import CheckIcon from '@/components/icons/CheckIcon.vue';
import FailIcon from '@/components/icons/FailIcon.vue';
import Paginator from 'primevue/paginator';
import JobsTableSettingsModal from './JobsTableSettingsModal.vue';

const jobs = ref([
  { id: "283e89cb-a73f-42fa-8541-c70351b06532e", startDate: "2023-01-10 12:37", status: "running", log: "Log", action: "stop", settings: { open: false } },
  { id: "283e89cb-a713f-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "completed", log: "Log", action: "adjust", settings: { open: false } },
  { id: "283e89cb-a73f-42fa-85141-c70351b0653e", startDate: "2023-01-10 12:37", status: "running", log: "Log", action: "stop", settings: { open: false } },
  { id: "283e89cb-a733f-422fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "failed", log: "Log", action: "adjust", settings: { open: false } },
  { id: "283e89cb-a733f-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "running", log: "Log", action: "adjust", settings: { open: false } },
  { id: "283e89cb-a73f-432fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "running", log: "Log", action: "stop", settings: { open: false } },
  { id: "283e89cb-a73f-42fa-8541-c703451b0653e", startDate: "2023-01-10 12:37", status: "completed", log: "Log", action: "adjust", settings: { open: false } },
  { id: "283e89cb-a73f4-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "completed", log: "Log", action: "adjust", settings: { open: false } },
  { id: "283e89cb-a73f-42fa-11541-c70351b0653e", startDate: "2023-01-10 12:37", status: "completed", log: "Log", action: "adjust", settings: { open: false } },
  { id: "283e89cb-a763f-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "completed", log: "Log", action: "adjust", settings: { open: false } },
  { id: "283e89cb-a73f-42fa-85641-c70351b0653e", startDate: "2023-01-10 12:37", status: "completed", log: "Log", action: "adjust", settings: { open: false } },
  { id: "283e89cb-a73f2-42fa-8541-c70351b0653e", startDate: "2023-01-10 12:37", status: "completed", log: "Log", action: "adjust", settings: { open: false } },
  { id: "283e89cb-a73f-42fa-84541-c70351b0653e", startDate: "2023-01-10 12:37", status: "completed", log: "Log", action: "adjust", settings: { open: false } },
]);

const openSettingsModal = ref(false);

const currentPage = ref(1);
const rowsPerPage = ref(10);
const totalRecords = ref();
const dataTable = ref(null);

onMounted(() => {
  totalRecords.value = jobs.value.length;
  calculateTotalPages();
});

const calculateTotalPages = () => {
  return Math.ceil(totalRecords.value / rowsPerPage.value);
};
</script>

<template>
  <div class="font-[Jakarta] relative">
    <DataTable
      ref="dataTable"
      :rows="rowsPerPage"
      :value="jobs"
      paginator
      paginator-template="PrevPageLink NextPageLink"
      unstyled
      :table-class="'rounded-md font-[Jakarta] w-full p-10 min-w-[700px] overflow-x-scroll'"
      :pt="{
        root: { class: 'w-full font-[Jakarta]' },
        table	: { class: 'bg-white/5' },
        thead: { class: 'bg-white/10 text-left px-4 font-[Jakarta]' },
        tbody: { class: 'mx-10 p-10' },
        column	: { class: 'px-10' },
        bodyRow: { class: 'h-[38px] text-[12px] capitalize border-b border-white/5 [&:last-child]:border-none' },
        paginator: { class: '!bg-black w-full' },
        wrapper: {class: 'border border-white/20 rounded-xl'}
      }"
    >
      <Column
        field="id"
        header="JOB ID"
        :pt="{
          headerCell: {class: 'pl-5 py-[10px] text-[11px] uppercase w-[35%]'}
        }"
      />
      <Column
        field="startDate"
        header="Start Date"
        :pt="{
          headerCell: {class: 'py-2 text-[11px] uppercase w-[25%]'}
        }"
      />
      <Column
        field="status"
        header="Status"
        :pt="{
          headerCell: {class: 'py-2 text-[11px] uppercase w-[23%]'}
        }"
      >
        <template #body="{ data }">
          <div class="flex items-center justify-start gap-[5px]">
            <div class="w-[16px] h-[16px] flex items-center justify-center">
              <CheckIcon v-if="data.status === 'completed'" />
              <FailIcon v-if="data.status === 'failed'" />
              <div
                v-if="data.status === 'running'"
                class="w-[6px] h-[6px] rounded-full bg-[#34D399]"
              />
            </div>
            <span>{{ data.status }}</span>
          </div>
        </template>
      </Column>
      <Column
        field="log"
        header="Log"
        :pt="{
          headerCell: {class: 'py-2 text-[11px] uppercase w-[10%]'}
        }"
      >
        <template #body>
          <button class="w-[30px] h-[15px] bg-[#D1FAE5] flex items-center justify-center rounded-lg">
            <ArrowIcon class="w-[13px] text-[#065F46] transform rotate-90" />
          </button>
        </template>
      </Column>
      <Column
        field="action"
        header="Action"
        :pt="{
          headerCell: {class: 'py-2 text-[11px] uppercase w-[10%] pr-5'}
        }"
      >
        <template #body="{ data }">
          <button
            class="min-w-[48.62px] h-[18.7px] px-2 rounded-xl text-[11px] font-medium text-center flex items-center justify-center leading-[18.7px]"
            :class="{'bg-[#FEE2E2] text-[#991B1B]': data.action === 'stop', 'bg-[#D1FAE5] text-[#065F46]': data.action === 'adjust'}"
            @click="data.settings.open = true"
          >
            {{ data.action }}
          </button>
          <JobsTableSettingsModal
            :open-modal="data.settings.open"
            @close-modal="data.settings.open = false"
          />
        </template>
      </Column>
      <template #paginatorprevpagelinkicon />
      <template #paginatornextpagelinkicon />
      <template #footer>
        <div class="w-full flex justify-between items-center mt-5 px-5">
          <span class="block text-[12px] font-[Jakarta] text-white/75">
            Page {{ currentPage }} / {{ calculateTotalPages() }}  
          </span>
          <Paginator
            unstyled
            template="PrevPageLink NextPageLink"
            :pt="{
              previousPageButton: {class: 'w-[48px] h-[29px] rounded-md bg-white/30 mr-2'},
              nextPageButton: {class: 'w-[48px] h-[29px] rounded-md bg-white/30'}
            }"
          />
        </div>
      </template>
    </DataTable>
  </div>
</template>

<style>
tr {
    padding: 10px !important;
  }
  tbody tr td:nth-child(1) {
    padding: 14px 20px;
  }
  
  .p-icon {
    margin-top:-3px
  }
</style>